export interface EmailData {
    totalMailResgistrados: MailInfo;
    totalMailEnviados: MailInfo;
    totalMailListaNegra: MailInfo;
    totalMailNoDespachado: MailInfo;
    totalMailEsperaStatus: MailInfo;
    totalMailRebotados: MailInfo;
    totalMailErrorDesconocido: MailInfo;
}

export interface MailInfo {
    total: number;
    label: string;
}