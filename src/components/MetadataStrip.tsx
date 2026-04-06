type MetadataStripProps = {
  items: string[];
};

export function MetadataStrip({ items }: MetadataStripProps) {
  return (
    <div className="metadata-strip">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
