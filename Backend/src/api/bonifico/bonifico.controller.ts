import { NextFunction, Request, Response } from "express";
import BonificoService from "./bonifico.service";
import { BonificoDTO } from "./bonifico.dto";
import { validate } from "class-validator"; // Per validare il DTO
import logService from "../services/logs/log.service";
import bonificoService from "./bonifico.service";
import { User } from "../user/user.entity";

export const eseguiBonifico = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // Mappiamo i parametri dal corpo della richiesta
  const { ibanDestinatario, importo, causale=""} = req.body;

  const user = req.user! as User;

  // Verifica che i campi non siano undefined
  if (!ibanDestinatario || !importo) {
    logService.add("Transaction Error", false);
    return res.status(400).json({ message: "Dati mancanti o incompleti." });
  }

  // Creazione dell'istanza del DTO e validazione
  const bonificoDTO = new BonificoDTO();
  bonificoDTO.ibanMittente = await BonificoService.getIBANByUserId(user.id!);
  bonificoDTO.ibanDestinatario = ibanDestinatario;
  bonificoDTO.importo = Number(importo);
  bonificoDTO.causale = causale;

  const errors = await validate(bonificoDTO); // Validazione del DTO
  if (errors.length > 0) {
    logService.add("Transaction Error", false);
    return res.status(400).json({ message: "Errore di validazione", errors });
  }

  try {
    const result = await BonificoService.eseguiBonifico(bonificoDTO, user.id!);
    if (result.success) {
      logService.add("Transaction", true);

      return res.status(200).json({ message: result.message });
    }
    logService.add("Transaction Error", false);
    return res.status(400).json({ message: result.message });
  } catch (error) {
    if (error instanceof Error) {
      logService.add("Transaction Error", false);
      return res
        .status(500)
        .json({ message: `Errore del server: ${error.message}` });
    }
    logService.add("Transaction Error", false);
    return res.status(500).json({ message: "Errore sconosciuto" });
  }
};

export const eseguiRicarica = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //operatore: string, numero: int, taglio: int
  const { numero, operatore, taglio } = req.body;
  const user = req.user! as User;
  //aggiungere un record nella tabella movimenti che riduce il valore del saldo finale
  try {
    const result = await bonificoService.eseguiRicarica(
      user,
      numero,
      operatore,
      taglio
    );

    if (result.success) {
      logService.add("Transaction", true);
      return res.status(200).json({ message: result.message });
    }else{
      return res.status(404).json({message: result.message});
    }
    
  } catch (err) {
    logService.add("Transaction Error", false);
    return res.status(500).json({message: `Error ${err}`});
  }
};
