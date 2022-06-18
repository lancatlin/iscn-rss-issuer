import rssParser from "rss-parser";

const parser = new rssParser();

async function parse(body) {
  let feed = await parser.parseString(body);
  console.log(feed);

  return feed.items.map(
    ({ title, link, pubDate, creator, description, contentSnippet, guid }) => ({
      title,
      guid,
      link,
      pubDate,
      stakeholder: {
        name: creator || feed.title,
        id: feed.link,
      },
      description: description || contentSnippet,
    })
  );
}

export default parse;
