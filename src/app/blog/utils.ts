import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMDXFiles(dir: string) {
  const mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
  return mdxFiles;
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getMDXDAta(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXDAta(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

export function formatDate(date: string, includeRelative = true) {
  const currentDate = new Date();
  if (date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} anos atrás`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo} meses atrás`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} dias atrás`;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formattedDate = "Hoje";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
