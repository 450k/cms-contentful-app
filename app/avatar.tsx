import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  avatar,
}: {
  name: string;
  avatar: any;
}) {
  return (
    <div className="flex items-center">
      {avatar?.url && (
        <div className="mr-4 w-12 h-12">
          <ContentfulImage
            alt={name}
            className="object-cover h-full rounded-full"
            height={48}
            width={48}
            src={avatar.url}
          />
        </div>
      )}
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
