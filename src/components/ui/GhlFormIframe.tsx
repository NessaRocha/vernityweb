"use client";

type Props = { url: string };

export default function GhlFormIframe({ url }: Props) {
  return (
    <iframe
      src={url}
      style={{
        width: "100%",
        minHeight: 720,
        border: "none",
        borderRadius: 12,
        background: "transparent",
      }}
      loading="lazy"
      title="Formulário de Contato"
    />
  );
}
