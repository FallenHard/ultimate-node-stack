import db, { genId } from '../../src/modules/db';

const run = async () => {
    await db.post.createMany({
        data: [
            {
                id: genId(),
                slug: 'ultimate-node-stack',
                title: 'Ultimate Node Stack 2024',
                publishedAt: new Date()
            },
            {
                id: genId(),
                slug: 'draft-post',
                title: 'Draft Post'
            },
        ],
    });
};

if (require.main === module) {
    run().then(() => {
        console.log('Data seed complete');
        process.exit();
    });
}