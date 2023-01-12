type PROTOCOl = "HTTP" | "HTTPS";

interface Configs {
  protocol?: PROTOCOl;
}

export class Routeur {
  constructor(configs?: Configs) {}
}
