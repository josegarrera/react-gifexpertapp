import { getGifs } from '../../helpers/getGifs';

    describe('Tests on getGifs function', () => {
        test('should response with 10 elements array', async () => {
            const gifs = await getGifs('one punch');
            expect(gifs.length).toBe(10);
        });
    })