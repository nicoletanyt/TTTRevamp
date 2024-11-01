import HIGHLIGHT_1 from ".//assets/HIGHLIGHT_1.jpg";
import HIGHLIGHT_2 from ".//assets/HIGHLIGHT_2.jpg";
import HIGHLIGHT_3 from ".//assets/HIGHLIGHT_3.jpg";
import HIGHLIGHT_4 from ".//assets/HIGHLIGHT_4.jpg";

export const MILESTONES = [
	{ year: 1981, description: "Top To Toe (TTT) BC was founded." },
	{
		year: 1981,
		description: "The first school in Singapore was accredited by CIBTAC, UK.",
	},
	{
		year: 1983,
		description:
			"The first CIDESCO-accredited school in Singapore was established.",
	},
	{
		year: 1983,
		description: "The Singapore Association was established to join CIDESCO.",
	},
	{
		year: 1983,
		description:
			"Launch of the First Asia Beauty Congress at the World Trade Center with KK Wong as the founding chairman.",
	},
	{
		year: 1989,
		description:
			"The Second Asia Beauty Congress was held at the World Trade Center.",
	},
	{ year: 1989, description: "The first school was opened in Malaysia." },
	{
		year: "2001",
		description: "Third Asia Beauty Congress at the Putu Traja, KL, Malaysia",
	},
	{
		year: "2002",
		description:
			"Second school in Johor Bahru (JB), third school in Penang (PG), fourth in Yipong, fifth in Penang, and sixth in Malacca.",
	},
	{
		year: "2003",
		description: "Accredited by ITEC.",
	},
	{
		year: "2004",
		description: "ITE School.",
	},
	{
		year: "2004",
		description:
			"Cheif Judge for the first and second gold medalists for Singapore at the World Skills Beauty Therapy Competition.",
	},
	{
		year: "2004",
		description: "Awarded CaseTrust accreditation.",
	},
	{
		year: "2005",
		description: "Launched Singapore's first Spa Management Diploma.",
	},
	{
		year: "2005",
		description:
			"Hosted the World Masters Professional Beauty and Associates Congress at Sheraton Hotel with Mrs. Joan Thorncroft.",
	},
];

export const HIGHLIGHTS = [
	{
		image: HIGHLIGHT_1,
		title: "World Skills Competition for Singapore",
		desc: "This competition highlights the best of the best, showing off skills that drive industries forward and set new standards. One standout figure here is Jenny Wong. She’s the chief judge, and with her wealth of experience, she’ll ensure that only the top talent walks away with the gold. Jenny judged our first two gold medalists and played a key role in nurturing and evaluating the excellence that won them their medals.",
	},
	{
		image: HIGHLIGHT_2,
		title: "Organizer of the First Aisa Beauty Congress",
		desc: "Have you ever considered the beauty industry's impact on our lives? Not just in how we look but also in how it influences our confidence, connections, and careers. Back in the '80s, I had first-hand experience seeing all of this unfold. Organising the first Asia Beauty Congress in 1983 was a game-changer. Fast-forward to 1989 at the World Trade Center, and you can truly grasp how much the industry had evolved.",
	},
	{
		image: HIGHLIGHT_3,
		title: "President of Cidesco Singapore Association of Beauty Therapy",
		desc: "Professional development is key to success in any industry, and beauty therapy is no exception. As President of the Cidesco Singapore Association of Beauty Therapy, Jenny Wong has seen how vital continuous learning and certification are. Cidesco examiners ensure therapists meet global standards, maintaining quality and excellence for both professionals and clients. Achieving Cidesco certification is more than a credential—it's a mark of commitment to skill and growth.",
	},
	{
		image: HIGHLIGHT_4,
		title: "Jenny is still active as the Principal of TTT College",
		desc: "Besides teaching lessons, Jenny represents TTT College at trade conferences and exhibitions to network and stay current with industry trends. She also contributes her extensive knowledge at feedback sessions in the industry. We dusted off our archives and selected photographs depicting significant milestones throughout our 40-plus-year journey.",
	},
];

export const TEAM = [
	{
		name: "Jenny Wong",
		desc: "Jenny Wong has served as the Principal of Top To Toe Beauty College since 1981. She is also the Founder of World Masters Professional Associates and the President of the Singapore Association of Beauty Therapists. Jenny founded TTT College with the mission of enhancing the beauty industry through top-notch education and training in Singapore. As a result, she has transformed TTT College into the most esteemed private educational institution for Beauty and Holistic Wellness in Singapore while also emphasizing the importance of sharing her timeless insights about beauty. Her philosophy can be encapsulated in the 5A's: Authentic, Ascending, Aspirational, Altruistic, and Aesthetic. Jenny possesses a remarkable talent for inspiring and motivating students to reach their full potential. In addition, she excels in effectively leading and managing business operations.",
	},
	{
		name: "Helen Tan",
		desc: "Ms. Helen Tan boasts over 38 years of experience in the beauty, spa, and wellness training industry. She holds certifications from CIBTAC, ITEC, and CIDESCO in various fields, including Aesthetic, Body, Face, and body Electrotherapy, Spa, Aromatherapy, advanced Skincare Treatments, IPL, and Microdermabrasion. In addition, she has served as a trainer and international examiner for CIDESCO International and TEC for more than 25 years. Her professional journey encompasses training, spa licensing, consultancy, and courseware development, supported by ACTA and DACE qualifications and managing five-star hotel spas and an airport spa.",
	},
	{
		name: "Shillina Phua",
		desc: "Ms Shillina Phua is a certified trainer, instructor, and therapist specialising in aesthetic therapy and body care. She offers a variety of holistic programs to help infants, children, young people, and adults, with the mission of enhancing well-being through unique therapeutic methods and innovative training. As a Tactile Orchestration enthusiast and developer, she integrates mindful movements and touch techniques for infants and children, aiding in their growth, development, and relaxation to give them a better sensory experience in their early years.",
	},
	{
		name: "Amy Zhang",
		desc: "Ms Amy Zhang is a dedicated entrepreneur and parenting educator, celebrated for her maternity and family care expertise. Her mission is to empower families to embark on a fulfilling and joyful parenting journey through specialized education, professional training, and high-quality products. She has focused on nurturing touch education tailored to various age groups. Since 2006, she has been a certified instructor for infant and child massage programs and a nurturing touch pre- and postnatal massage well-being program. Additionally, she is a certified holistic massage therapist accredited by ITEC. Amy takes great pleasure in sharing her extensive knowledge and connecting with individuals committed to the art of nurturing touch.",
	},
	{
		name: "Bernice Wong YE",
	},
	{
		name: "KK Wong",
	},
	{
		name: "Wong Yi Jin",
	},
	{
		name: "Embely Seah",
		desc: "Embely Seah is an accomplished professional in the beauty industry, having obtained her Diploma in International Professional Esthetics (USA) in 1997. Additionally, she possesses various certificates in ITEC Facial Skincare and Nail Technology, along with a Diploma in Holistic Massage, among others. She has also devoted more than ten years to her position at Top To Toe Beauty College. Embely enjoys reading books on Human Relations to enhance her communication skills and foster better interpersonal relationships.",
	},
];

class Course {
	constructor(name, img, duration, content) {
		this.name = name;
		this.img = img;
		this.duration = duration;
		this.content = content;
	}
}

// for the "LEARNING-OBJECTS" and "WHY" parts, split using "." for bullet points

export const COURSES = {
	"professional-human-development": new Course(
		"Professional Human Development",
		"",
		4,
		{
			about:
				"The Professional Human Development workshop is a transformative experience that delves into the essential aspects of what it means to be human and the ongoing development necessary to thrive in an ever-evolving world. Participants will explore the unique traits and characteristics that define us, emphasizing the importance of personal growth and self-awareness.",
			"learning-objectives":
				"Insights into the interconnected dimensions of emotional, social, and intellectual development. Professional methodologies and best practices for fostering meaningful growth. Actionable strategies for setting personal goals and creating effective development plans.",
			why: "Empower yourself to navigate personal and professional growth effectively. Engage in reflective discussions and practical exercises. Build a solid foundation for sustainable, lifelong development. Equip yourself to meet life's challenges with confidence and professionalism.",
			"call-to-action":
				"We look forward to embarking on this enriching journey with you!",
		}
	),
	"nurturing-touch-pre-post-natal-well-being": new Course(
		"Nurturing Touch Pre & Post Natal Well-being",
		"",
		16,
		{
			about:
				"The Nurturing Touch Pre & Post Natal Well-being course is a comprehensive 16-hour program designed for healthcare professionals, therapists, beauticians, and anyone interested in enhancing their knowledge and skills in providing essential care for expectant and new mothers. Participants will engage in a rich curriculum that combines theoretical knowledge with practical applications, ensuring effective and safe nurturing touch.",
			"learning-objectives":
				"Contextualization of Nurturing Massages: Understanding the significance of nurturing touch during pregnancy. Physical and Emotional Changes: Exploring the impacts of these changes on women during pregnancy and postpartum. Physical Benefits of Massage: Learning the physiological advantages of massage throughout pregnancy, labor, and recovery. Emotional Benefits: Discussing prenatal bonding and the importance of emotional support during this time. Contraindications: Identifying situations where massage should be approached with caution or avoided entirely. Postural Care and Primary Conditions: Understanding how placements and posture affect well-being. Practice of Techniques: Engaging in practical demonstrations of effective massage techniques for pregnant and postpartum women. Self-Massage Techniques: Learning techniques for mothers to promote self-care and relaxation during pregnancy and the post-natal period.",
			why: "Equip yourself with the knowledge and skills to conduct pre-treatment consultations and provide effective pre- and post-natal massages. Enhance your practice to support mothers in achieving better physical and emotional well-being. Make a positive impact on the lives of mothers and their families through nurturing touch. Join an empowering journey that emphasizes holistic care during one of life's most significant transitions.",
			"call-to-action":
				"Join us in this empowering journey to enhance your practice and make a positive impact on the lives of mothers and their families!",
		}
	),
	"tactile-orchestration-integrating-mindful-movement": new Course(
		"Tactile Orchestration: Integrating Mindful Movement",
		"",
		50
	),
	"kind-hands-massage-stories-and-songs": new Course(
		"Kind Hands Massage Stories and Songs",
		"",
		8
	),
	"impact-well-being": new Course("Impact Well-being", "", 8),
	"alexander-technique": new Course("Alexander technique", "", 50),
	"rolfing-structural-integration": new Course(
		"Rolfing Structural Integration",
		"",
		16
	),
	"smart-physical-and-mental-health-therapy": new Course(
		"SMART Physical and Mental Health Therapy",
		"",
		8
	),
};

export const BIOGRAPHY = [
	{
		img: "",
		text: "Jenny Wong has been the Principal of Top To Toe Beauty College since 1981, and she is also the Founder of World Masters Professional Associates and the President of the Singapore Association of Beauty Therapists. She established TTT College with the vision of elevating the beauty industry by delivering world-class education and training in Singapore. Moving forward, Jenny has not only made the TTT colleague the most respected private education institute for Beauty and Holistic Wellness education in Singapore, but she is also focused on sharing her everlasting wisdom in the voice of beauty. 5A: Authentical, Ascending, Aspirational, Altruistic, Aesthetic Jenny has an innate ability to motivate and inspire students to achieve their fullest potential. Furthermore, she is highly proficient in effectively leading and managing businesses.",
	},
	{
		img: "",
		text: ""
	}
];