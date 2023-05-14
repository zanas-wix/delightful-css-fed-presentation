const params = new URLSearchParams({
	fit: 'crop',
	w: '1200',
	h: '800',
}).toString()

const articles = [
	{
		heading: 'Hilarious Cats Caught in Awkward Sleeping Positions',
		leading_paragraph:
			"These sleepy felines have mastered the art of uncomfortable napping. Whether it's contorting their bodies into peculiar shapes or choosing the most inconvenient locations, these cats take napping to a whole new level of hilarity. From upside-down positions that defy gravity to precarious perches on narrow ledges, their sleepy antics will leave you in stitches. Get ready to chuckle at these purrfectly awkward sleeping positions!",
		author: 'Luna Meowington',
		date: 'May 10, 2023',
		image_url:
			'https://images.unsplash.com/photo-1620071134584-93621c411448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&' + params
	},
	{
		heading: 'Adorable Cat Fails at Being Stealthy, Hilarity Ensues',
		leading_paragraph:
			'This clumsy kitty needs to take a few more lessons in being a ninja. With every failed attempt at sneaking around, this cat brings a whole new level of laughter into our lives. From knocking down objects with a not-so-graceful pounce to getting tangled up in curtains while trying to execute a stealthy entrance, this furball is far from being a master of disguise. Join us as we giggle at the hilarious misadventures of this wannabe ninja cat!',
		author: 'Whiskers McFluffington',
		date: 'May 12, 2023',
		image_url:
			'https://images.unsplash.com/photo-1534803359379-964dadf6c290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&' + params
	},
	{
		heading: 'Cats Photobombing Family Portraits: A Compilation',
		leading_paragraph:
			"These mischievous felines just can't resist stealing the spotlight. When families gather to capture cherished memories, these cheeky cats seize the opportunity to jump into the frame and leave their mark. From photobombing with goofy expressions to striking hilariously awkward poses, these four-legged attention seekers make every family portrait a memorable adventure. Prepare to chuckle as we present a delightful compilation of cats photobombing unsuspecting families!",
		author: 'Purrfectly Pawsome',
		date: 'May 14, 2023',
		image_url:
			'https://images.unsplash.com/photo-1677629828024-7793ff7d9403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&' + params
	}
];

export function load() {
	return { articles };
}
