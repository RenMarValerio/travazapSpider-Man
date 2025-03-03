async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`OVER SONY LOGO:
NY1 REPORTER (V.O.)
We come to you now with revelations
about last week’s attack in London.
An anonymous source provided this
video. It shows Quentin Beck, aka
Mysterio, moments before his death.
Warning: you may find this video
disturbing.
OVER COLUMBIA LOGO:
QUENTIN BECK (V.O.)
I managed to send the Elemental
back through the dimensional rift,
but I don't think I'm gonna make it
off this bridge alive. Spider-Man
attacked me for some reason. He
has an army of weaponized drones,
Stark technology. He's saying he's
the only one who's gonna be the new
Iron Man, no one else.
E.D.I.T.H. (V.O.)
Are you sure you want to commence
the drone attack? There will be
significant casualties.
SPIDER-MAN (V.O.)
Do it! Execute them all!
DRONES FIRE! EXPLOSIONS from the Tower Bridge.
OVER MARVEL LOGO:
NY1 REPORTER (V.O.)
This shocking video was released
earlier today on the controversial
news website TheDailyBugle.net.
J. JONAH JAMESON (V.O.)
There you have it, folks:
conclusive proof that Spider-Man
was responsible for the brutal
murder of Mysterio! An interdimensional warrior who gave his
life to protect our planet, and who
will no doubt go down in history as
the greatest superhero of all time.
But that's not all, folks. Here's
the real blockbuster. Brace
yourselves, you might wanna sit
down.
1.
2.
QUENTIN BECK (V.O.)
Spider-Man's real... Spider-Man's
real name is...
A DISTORTED SOUND VORTEX, then--
EXT. MADISON SQUARE GARDEN - DAY
The last moments of Quentin Beck’s broadcast from the end of
FAR FROM HOME.
QUENTIN BECK (CONT'D)
Spider-Man's name is Peter Parker!
Peter Parker’s SCHOOL PHOTO appears on the jumbo-screen.
SPIDER-MAN
What the f--!
SPIDER-MAN, crouched on the streetlamp, watches J. JONAH
JAMESON on the jumbo-screen.
J. JONAH JAMESON (ON SCREEN)
That’s right, folks. Peter Parker.
A 17-year-old high school
delinquent harboring a homicidal
hunger is in fact the vile
vigilante villain Spider-Man.
BYSTANDERS look up at Spider-Man with new eyes... then turn
to MJ standing on the sidewalk.
BYSTANDER #1 (O.S.)
(re: MJ)
She knows him.
BYSTANDER #2
(to MJ)
Are you Spider-Man’s girlfriend?
BYSTANDER #1 (O.S.)
They swung in together.
BYSTANDER #2
(pushy)
Are you Spider-Man’s girlfriend?
People close in on MJ. Spider-Man quickly jumps down to
protect her.
BYSTANDER #1 (O.S.)
Whoa, it’s him!
2.
3.
SPIDER-MAN
Whoa whoa whoa. Please don’t touch
her.
BYSTANDER #3
You’re just a kid?
BYSTANDER #4
You murdered Mysterio?
(to MJ)
You helped him murder Mysterio?
SPIDER-MAN
Uh... no, I didn’t--
Bystander #4 reaches for Spider-Man’s mask.
BYSTANDER #4
Come on kid, let me see that face.
Spider-Man swats her hand away.
BYSTANDER #4 (CONT'D)
He hit me! Spider-Man hit me!
The others react: whoa! Everyone FILMS ON THEIR PHONES as
she holds up her arm.
BYSTANDER #4 (CONT'D)
He hit me! Spider-Man hit me!
A crowd forms, closing in... Spider-Man grabs MJ and WEBS
OFF! A MAN jumps after, trying to seize them, but misses.
EXT. NYC STREETS/QUEENSBOROUGH BRIDGE - MOMENTS LATER (DAY)
Spider-Man, clutching MJ, SWINGS frantically.
J. JONAH JAMESON (V.O.)
All this time, people looked up to
this boy and called him a hero.
Well I’ll tell you what I call him:
Public Enemy #1.
MJ holds tight to Spider-Man.
MJ
I told you I never wanted to do
this ever again!
Her hands cover part of his mask.
3.
4.
SPIDER-MAN
MJ, I’m so sorry, but I can’t see
anything with your hand in my--
MJ
I’m sorry. Sorry...
They swing past another jumbo-screen. It features half of
Peter’s face and half of Spider-Man’s mask under the words:
“PUBLIC ENEMY #1.”
MJ (CONT'D)
Okay, where are we gonna go?
SPIDER-MAN
I don’t know! Your house?!
MJ
No, no! We cannot go to my house,
my dad will kill you!
SPIDER-MAN
What? I thought you said your dad
really liked me?
MJ
Yeah, well not anymore!
Spider-Man and MJ LAND on top of the Queensborough Bridge.
Spider-Man’s phone VIBRATES! He answers--
SPIDER-MAN
(into phone)
DUDE!
NED appears on Spider-Man’s phone.
NED (ON PHONE)
DUDE!
SPIDER-MAN
DUDE!
NED (ON PHONE)
DUDE!
SPIDER-MAN
DUDE!
NED (ON PHONE)
DUUUUDE!
4.
5.
MJ
(to Spider-Man)
DUDE!
Spider-Man has left MJ STANDING PRECARIOUSLY ATOP THE BRIDGE!
SPIDER-MAN
Ah, I’m so sorry. Are you okay?
MJ
No, not really. Uh...
GONDOLA PASSENGER (O.S.)
Yo, Peter!
Spider-Man and MJ turn to see--
The EYES OF THE WHOLE CITY are on them: CROWDS on the
Roosevelt Gondola FILM THEM WITH PHONES. PEOPLE point from
balconies and high-rise windows.
ROAR! A NEWS HELICOPTER flies up to them! Suddenly joined
by ANOTHER ONE!
MJ
We should go. We should go, come
on!
SPIDER-MAN
But you said you don’t want to
swing.
MJ
Swing me. You should just swing
me, yeah!
SPIDER-MAN
Okay, we can take the subway.
Spider-Man grabs MJ and... DIVES off the bridge! MJ SCREAMS.
BELOW: FLASH strolls along the sidewalk, staring at his
phone.
ANGLE ON HIS PHONE SCREEN: The Daily Bugle official TikTok
shows the half Spider-Man, half Peter Parker photo.
FLASH
No!
Flash gawks at it in disbelief, totally oblivious as--
5.
6.
Spider-Man and MJ PLUMMET into view behind him... Spider-Man
WEBBING a grate in the sidewalk... YANKING it up... DROPPING
them through the hole and... SLAMMING it closed behind them!
INT. TRAIN TUNNEL - CONTINUOUS (DAY)
Clutching MJ, Spider-Man SWINGS through the tunnels until--
MJ
Look out!
A train coming right at them! VVWHOOM! Spider-Man STEERS
them into a different tunnel just in time!
EXT. QUEENS STREET - LATER (DAY)
A manhole cover slides open. Spider-Man emerges, stopping to
help a rattled MJ climb out.
MJ
That was so much worse! But it’s
okay.
SPIDER-MAN
Are you okay?
MJ
Yeah, yeah... I’m okay.
Spider-Man WEBS the manhole shut, then gestures for MJ to hop
back on.
SPIDER-MAN
Come on, come on, come on! Okay...
MJ jumps into Peter’s arms. As they swing off again--
SPIDER-MAN (CONT'D)
I’m so sorry!
EXT. PETER & MAY’S APARTMENT BUILDING - LATER (DAY)
Still carrying MJ, Spider-Man swings and lands outside his
bedroom window. An unsteady MJ lifts the glass as Spider-Man
hoists her up.
SPIDER-MAN
I’m sorry!
6.
7.
INT. PETER & MAY’S APARTMENT - LIVING ROOM - SAME TIME (DAY)
HAPPY stands just outside the door to the apartment. His
eyes are red and puffy. As MAY goes to shut the door--
HAPPY
I just feel so dumb. I didn’t
realize you were... miserable.
MAY
No, it was really fun. You know,
that’s why they call it a “fling.”
And we flung.
HAPPY
It was fun. I could’ve been more
fun. I can be fun.
MAY
We’ll hang out again.
HAPPY
Wait. When do you think?
A CRASH. From Peter’s bedroom. May and Happy turn to it.
Happy goes into security mode, walking back into the
apartment, headed towards Peter’s room. May rolls her eyes,
thinking he’s making excuses to stay.
HAPPY (CONT'D)
I should see what that is.
MAY
No. No no no no, Happy--
HAPPY
It’s what I do.
MAY
He’s always coming and going. It’s
not--
HAPPY
Peter?
MJ (O.S.)
Peter!
PETER (O.S.)
Uh... oh no!
MJ (O.S.)
Oh God. Peter!
7.
8.
PETER (O.S.)
I don’t know what to do! Ah!
MJ (O.S.)
Peter, Peter!
As Happy SHOVES open the door--
INT. PETER & MAY’S APARTMENT - PETER’S ROOM - CONT. (DAY)
Peter stands in front of MJ, in the act of taking off his
suit. Both are startled and look guilty. All signs point to
an interrupted romantic moment.
MJ
Oh, I can--
PETER
Oh my God! Um...
HAPPY
(covering his eyes)
I didn’t see anything.
PETER
This isn’t what it looks like!
May goes to shut the door--
MAY
I’m so sorry. Practice safe--
PETER
No no no, May, this is not what it
looks like! May!
Then May turns back around and realizes--
MAY
Oh, hey! You must be MJ.
MJ
Yeah, sorry. Nice to meet you.
MAY
So nice to meet you.
As May and MJ shake hands, Peter notices Happy’s face.
PETER
Wait, have you been crying?
HAPPY
We broke up.
8.
9.
PETER
Oh.
QUEENS RESIDENT #1 (O.S.)
Hey, Spider-Man!
PETER
(panicking)
Oh! Uh--
Peter quickly webs the blinds shut. MJ hands him a T-shirt.
PETER (CONT'D)
(to MJ)
Thank you.
(to May)
I didn’t know you guys broke up. I
thought you were in love, May.
MAY
No, it was a moment in time.
Peter rushes May out of his room.
PETER
Can we talk about this in the
kitchen?
HAPPY
You know I should probably leave.
I think...
INT. PETER & MAY’S APT. - HALLWAY/LIVING ROOM - CONT. (DAY)
Peter and May move down the hallway.
PETER
I, uh... I thought you guys were
such a handsome couple.
MAY
(whispering)
You know it’s really about
boundaries.
PETER
Oh, okay.
BUZZ! The building’s front door!
MAY
Let me answer the door.
9.
10.
PETER
Oh, hang on. Let’s go in here.
Peter steers May to the living room.
HAPPY
Is that the door?
NOSEY NEIGHBOR
(peering in)
Hey, is it true?
HAPPY
I was gonna go, but--
MJ hurries to shut the door on a NOSEY NEIGHBOR.
MJ
Not now!
HAPPY
--I’ll stick around if you want.
The Neighbor KNOCKS:
NOSEY NEIGHBOR (O.S.)
Open up!
Peter sits May down.
MAY
(whispering)
I didn’t know you were so awkward
about sex, Peter.
PETER
This has nothing to do with sex!
MJ runs to shut one of the living room blinds while... BUZZBUZZ! The front door rings again.
HAPPY
Look, I’m really feeling like I
shouldn’t be part of this
conversation. I should go, but if
you wanna go over it again, I mean,
I’m--
COMMOTION from outside the building.
HAPPY (CONT'D)
What’s that sound?
10.
11.
PETER
Uh...
Peter rushes to the remaining windows, shutting the blinds.
QUEENS RESIDENT #2 (O.S.)
Hey, Spider-Man!
PETER
(sotto)
Oh my God...
HAPPY
(to May)
I don’t know what to do here. I...
I mean, I’m happy to rehash it if
you want to. But I just don’t--
MAY
No, you take care of your side of
the street and I’ll take care of
mine.
The COMMOTION outside continues to build, as Peter reaches to
close the last blind.
PETER
I just want to tal--
The blind POPS OPEN. Peter goes back, webs it shut, as-- RING
RING! Happy and May’s phones light up with messages and
calls.
MAY
What is happening with my phone?
Mine is blowing up...
PETER
Okay--
Peter frantically grabs their phones.
PETER (CONT'D)
Will you get off your phones for,
like, five minutes?! I just want
to talk to you about your
relationship. Okay?!
MJ
Peter?
MJ points to the TV.
11.
12.
PETER
What?
Peter, May, and Happy turn towards the TV. The local news is
live with helicopter footage of the outside of the apartment.
The lower third graphic reads: “SPIDER-MAN’S IDENTITY
REVEALED.”
MAY
(gasps)
Is that--
HAPPY
Is that here?
PETER
Um...
The distraction is over. Peter sighs, slumps over, and pulls
up the blind TO REVEAL...
INSANITY. HELICOPTERS. PEOPLE gathered on the streets and
nearby rooftops, calling out Peter’s name.
May and Happy join Peter at the window. Looking out at the
chaos. Mouths agape.
PETER (CONT'D)
I mean, maybe it’s not such a big
deal?
SMASH TO:
NEWS BROADCAST: INT. DAILY BUGLE.NET NEWS DESK - DAY
J. JONAH JAMESON (V.O.)
SPIDER-MENACE!
CLOSE ON a “WANTED FOR MURDER” sign with Peter’s alarmed
face. Over that, someone has given Peter devil’s horns and
graffitied in bright red ink: “CRIMINAL!”
FLASH! The image turns black -- a photo-negative -- and
slides towards the upper righthand corner of the screen to
reveal J. Jonah Jameson at TheDailyBugle.net news desk.
J. JONAH JAMESON
Governments around the world launch
investigations into the murderer
known as Spider-Man!
The onscreen graphic changes to Peter’s school photo next to
a pair of handcuffs and a headstone that reads: “MYSTERIO.”
12.
13.
J. JONAH JAMESON (CONT'D)
A.k.a Peter Parker! A.k.a. The
Web-Headed War Criminal--
PULL WIDE to reveal Jameson’s “news desk” is a cheap digital
backdrop in a cluttered, conspiracy theorist’s apartment.
J. JONAH JAMESON (CONT'D)
--Who for years has been
terrorizing the decent citizens of
New York.
FLASH TO various newspaper and magazine covers:
-- THE NEW YORK DAILY NEWS: The school photos of Peter, MJ,
and Ned have been photoshopped into mug shots under a
headline that reads, “TRIO OF TERROR: PARKER’S CRONIES
REVEALED!”
-- TIME MAGAZINE: An illustration of Spider-Man as a crying
baby in a diaper under a headline that reads, “IRON MAN JR?
HOW DID A RECKLESS TEENAGER BECOME TONY STARK’S HEIR
APPARENT?”
-- IN-TOUCH WEEKLY: Half of Spider-Man’s mask over half of
Peter Parker’s face. The headline reads, “WORLD EXCLUSIVE!
TWO FACED -- HOW PARKER MAINTAINED HIS DUPLICITOUS DOUBLE
LIFE AND WHY HE CAN’T BE TRUSTED.”
J. JONAH JAMESON (CONT'D)
Well now this city, and the world,
see him for what he truly is!
AMATEUR PHONE CAMERA FOOTAGE of Spider-Man being doused with
green paint as someone yells:
MYSTERIO FANATIC (O.S.)
Murderer! Mysterio forever!
NEWS BROADCAST: INT. BRITISH NEWS DESK - DAY
A BRITISH ANCHOR sits behind a news desk, mid-broadcast.
BRITISH ANCHOR
New details from last week’s
devastating attack in London have
emerged.
FOOTAGE of the Tower Bridge attack from FAR FROM HOME. The
lower third graphic reads, “BREAKING NEWS: LONDON ATTACK.”
13.
14.
EXT. PETER & MAY’S APARTMENT BUILDING - NIGHT
NEWS VANS. CROWDS OF PEOPLE outside Peter’s home, holding
signs and chanting.
BRITISH ANCHOR (V.O.)
For more, we go now to Joint
Intelligence headquarters.
INT. PETER & MAY’S APARTMENT - NIGHT
Peter and May are watching the NEWS, still in shock.
IRISH REPORTER (V.O.)
Authorities, just a short while ago,
confirmed--
NEWS BROADCAST: INT. WAREHOUSE - DAY
AUTHORITIES sift through hundreds of broken Stark drones,
each sectioned off as evidence in taped-off quadrants.
IRISH REPORTER (V.O.)
--That the deadly drones used in
the London attack were designed by
Stark Industries.
INT. PETER & MAY’S APARTMENT - NIGHT
A loud KNOCK at the front door.
STERN VOICE (O.S.)
Federal agents! Open up!
MAY
Federal agents?
(to Peter)
You stay here!
May opens the door to a group of DAMAGE CONTROL AGENTS, led
by AGENT CLEARY.
AGENT CLEARY
Department of Damage Control. We
have a warrant for the arrest of
Peter Parker.
MAY
You know the Fourth Amendment?
14.
15.
AGENT CLEARY
Sure.
MAY
“Unreasonable search and seizure?”
AGENT CLEARY
Get in here guys. Let’s go!
MAY
You are not getting in this house!
As DoDC Agents push past May--
FLASH! Agents photograph evidence inside the apartment:
-- A framed photo of Ned and MJ at the school dance in
HOMECOMING.
-- The Iron Spider Suit charging chamber, next to a sign that
reads: “Iron Spider Charging, DO NOT UNPLUG.”
-- The glasses Tony left to Peter in FAR FROM HOME.
INT. DAMAGE CONTROL - INTERROGATION ROOM #1 - LATER (NIGHT)
Agent Cleary interrogates Peter.
PETER
I didn’t kill Quentin Beck, the
drones did.
AGENT CLEARY
The drones that are yours.
PETER
No! Well look-- Nick Fury was
there the entire time. Just ask
him and he can explain everything.
AGENT CLEARY
Nick Fury has been off-planet for
the last year.
PETER
(totally confused)
What?
MJ (O.S.)
Peter!
Just outside the glass walls of the interrogation room, DoDC
AGENTS bring in May, MJ, and Ned for questioning.
15.
16.
PETER
MJ!
(to Agent Cleary)
Ah, they have nothing to do with
this, sir!
MAY/MJ
Don’t say anything without a
lawyer!
INT. DAMAGE CONTROL - INTERROGATION ROOM #2 - LATER (NIGHT)
MJ is interrogated.
MJ
I want a lawyer.
AGENT CLEARY
Miss Jones-Watson--
MJ
Jones. I don’t go by Watson.
AGENT CLEARY
Miss Jones, why do you want a
lawyer if--
MJ
“If I have nothing to hide?”
AGENT CLEARY
Exactly. Unless--
MJ
“I’m actually guilty of something?”
I’m very aware of your tactics and
my rights.
AGENT CLEARY
Just answer my questions. I’ve
seen your file. You’re a smart,
young woman with a bright future
ahead of her. Why would you risk
it all by getting involved with a
vigilante like Peter Parker?
INT. DAMAGE CONTROL - INTERROGATION ROOM #3 - LATER (NIGHT)
Ned sits, scared. Cleary enters with a fellow DoDC AGENT.
16.
17.
AGENT CLEARY
So sorry to keep you waiting.
(to DoDC Agent)
Can we get Ned a snack, please?
DODC AGENT
Absolutely.
AGENT CLEARY
He’s been waiting here!
DODC AGENT
I got ya--
The DoDC Agent exits.
AGENT CLEARY
(to Ned)
Dude, I’m so sorry about that.
NED
I’m not supposed to say anything to
you.
AGENT CLEARY
No, Ned. Not even a thing. I just
have one question: when MJ told you
that Peter was Spider-Man--
NED
Whoa whoa whoa.
AGENT CLEARY
What’s up?
NED
I knew way before MJ did. I was
Spider-Man’s “Guy In The Chair.”
AGENT CLEARY
Oh, I know about those. Dude, half
my guys are Guys in the Chair.
NED
Well, exactly! You would know. I
literally helped him find the
Vulture.
AGENT CLEARY
(impressed)
I didn’t know that.
17.
18.
NED
(proud)
And I helped him hack a suit once
and kind of helped him get to
space.
AGENT CLEARY
So, in Spider-Man’s illegal
vigilanteism, you were his main
accomplice.
NED
(beat, scared)
I would like to have my words
stricken from the record.
INT. DAMAGE CONTROL - INTERROGATION ROOM #4 - LATER (NIGHT)
May is interrogated by Cleary.
MAY
With all due respect -- and I mean
that very insincerely -- unless you
have some real specific charges to
throw at us, legally you can’t hold
us here.
AGENT CLEARY
You should definitely lawyer up.
MAY
Excuse me?
AGENT CLEARY
Child endangerment’s a nasty rap.
A boy was entrusted to you, and as
his legal guardian -- essentially
his mother -- you not only allowed
him to endanger himself, but you
actually encouraged it. Who does
that?
MAY
I want to see Peter right now!
EXT. STARK INDUSTRIES - NIGHT
DoDC trucks rumble away from a Stark Industries facility, as
over this:
18.
19.
NY1 REPORTER (V.O.)
Stark Industries was caught in the
web of the Spider-Man/Mysterio
controversy today when federal
agents opened an investigation into
missing Stark Technology.
INT. PETER & MAY'S APARTMENT - LIVING ROOM - DAY
The same news broadcast plays on May’s TV.
NY1 REPORTER (V.O.)
Agents want to know exactly what
was taken and whether or not it
could fall into the wrong hands.
ON THE TV: A dated photo of Happy with long hair. The
graphic next to it reads, “NO COMMENT AT THIS TIME. - HAROLD
HOGAN, STARK INDUSTRIES SECURITY.”
HAPPY
At least they used a good picture.
PETER
(defeated)
What is happening?
PULL BACK to reveal a man with a cane, Peter’s LAWYER--
MATT MURDOCK
(on the phone)
That’s great. Thank you.
(hangs up)
Well, I have some good news, Peter.
I don’t believe any of the charges
against you are going to stick.
PETER
(relieved)
Wait, seriously?!
MAY
Oh, I knew it.
HAPPY
Nice!
PETER
Oh my God, Mr. Murdock. Thank you!
That’s amazing!
MAY
Thank you, Matt.
19.
20.
MATT MURDOCK
You’re welcome.
HAPPY
Perfect!
MATT MURDOCK
However, Mr. Hogan...
HAPPY
Yes?
MATT MURDOCK
The feds are actively investigating
the missing technology. I uh,
understand your loyalty to Mr.
Stark and his legacy. But if you
were involved--
HAPPY
(confused)
If I was involved?
MATT MURDOCK
I advise securing a lawyer.
HAPPY
(panicking)
I need a lawyer because I’m-- I’m
under investigation?
(re: Peter)
I thought he was-- You said that
there were no charges. I could
say, “Under advisement of council,
I refuse to answer the question,
respectfully, because I-- The
answer could incriminate me--” It’s
the saying in Goodfellas. What did
they say in Goodfellas?
MAY
I know that’s what you think. Calm
down, let’s hear what he has to
say. Matt?
MATT MURDOCK
You’re gonna need a really good
lawyer.
(to Peter)
Peter, you may have dodged your
legal troubles, but things will get
much worse. There is still the
court of public opinion.
20.
21.
CRASH! A projectile BURSTS through the window... hurtling
right at the four of them until--
Despite being completely blind, Murdock deftly CATCHES it in
mid-air!
MYSTERIO FAN (O.S.)
Murderer! Mysterio forever!
Peter, May, and Happy are confused.
PETER
How did you just do that?
MATT MURDOCK
I’m a really good lawyer.
Reveal the projectile is a brick wrapped in newspaper. On
it, someone has misspelled: “WE BELEIVE MYSTERIO.”
MAY
We’re gonna need a safer place to
live.
EXT. HAPPY’S CONDO BUILDING - ESTABLISHING SHOT - DAY
PAN UP from the East River to see the large, block letters of
the “LONG ISLAND, LONG ISLAND” sign. High-rises dot the
shorefront.
INT. HAPPY’S CONDO - DAY
CLICK! CLICK! CLICK! The three locks on the door open.
Peter and May enter carrying their suitcases and belongings.
An alarm SOUNDS overhead, while a large security monitor by
the front door blinks with a message: “ENTER ID CODE.”
MAY
Oh...
(covers ears)
Ah!
May turns the alarm off.
ALARM SYSTEM VOICE (V.O.)
Alarm system deactivated.
They look around at a nightmare of a bachelor pad: framed
Knicks and Islanders jerseys, a neon hot rod light, a putting
turf, and Tony’s old robot DUM-E. It waves at Peter and May.
May stares at it all. Taking it in.
21.
22.
MAY
Huh... it looks nice and... this is
safe.
Happy enters behind them carrying bags and a plant.
HAPPY
Welcome to the spiritual oasis.
You like Donkey Kong Jr.?
INT. HAPPY’S CONDO - STORAGE ROOM - NIGHT
Happy’s half-finished laundry room/storage space. Peter
leans over the sink trying to scrub the green paint off his
red and black suit. A radio broadcast plays in BG.
RADIO BROADCASTER (V.O.)
Nicky from Jersey City, you’re on
the line.
NICKY (V.O.)
Hi, I’m not saying I don’t want to
honor the Avengers, but, you know,
we’re not doing it this way. You
know, putting the Captain America
shield on the Statue of Liberty?
Nah.
But the green paint isn’t budging. Peter sighs.
NICKY (V.O.)
That’s gonna look ridiculous!
Leave the Statue of Liberty
alone...
FWHIP! Peter grabs a nearby tarp and dries his hands with
it. Then he notices -- the tarp was covering a large object
marked “Stark Cases.” As it hits Peter what the case is...
PETER
Oh Happy...
INT. HAPPY’S CONDO - LIVING ROOM/INT. MJ’S BEDROOM - INTERCUT
- NIGHT
ANGLE ON the security monitor of Happy’s condo. All is still
and quiet, save for--
Peter lies on the couch talking with MJ via FaceTime.
22.
23.
MJ
Did you send in your applications
yet?
PETER
I literally just finished my MIT
one. You?
MJ
(nodding)
Same.
PETER
Can you imagine if we both got in?
And Ned.
MJ
Yeah, but we’d have to get
scholarships so that we could
actually go.
PETER
Come on, you’ve got the scores and
the grades and--
MJ
You think I’m being too pragmatic.
PETER
No no no no no...
(beat)
Well, kinda. It’s okay. That’s
one of my favorite things about
you.
MJ
Really?
PETER
Yeah.
MJ
Well what are your other favorite
things?
PETER
I love your relentless optimism.
MJ
Yeah, I am a glass half-full kind
of gal.
23.
24.
PETER
I really like how you’re a people
person.
MJ
I love people. I love them so
much.
PETER
You like sports.
MJ
I think the Mets are gonna go all
the way this year.
PETER
(skeptical)
Really?
A low, persistent NOISE in the background.
MJ
What’s that noise?
PETER
Oh, it’s Happy. Look. He gave his
room to May so he’s sleeping down
here.
He shifts his phone so MJ can see--
PHONE POV: Happy sleeping on the couch, wearing a sleep apnea
mask and SNORING LOUDLY.
MJ
I have a weird question. Um...
does any part of you feel relieved
about all this?
PETER
Ever since I got bit by that
spider, I’ve only had one week
where my life has felt normal. Or
kinda normal, I guess. And... that
was when you found out. Because
then everyone that was in my life
that I wanted to know, knew. And
it was perfect.
(then)
But now everybody knows. And I am
the most famous person in the
entire world... and I’m still
broke.
24.
25.
They laugh.
MJ
I’m excited to see you tomorrow.
PETER
Yeah, me too.
A tender moment between the two. Until--
HAPPY
Wrap it up!
Peter jumps! Turns to see--
HAPPY (CONT'D)
(through his sleep apnea
mask)
You both like each other, we get
it. Hang up. There’s no new
ground being broken. Okay? I need
my eight hours.
PETER
(to Happy)
Have you been listening this whole
time?
MJ waves on Peter’s phone screen.
MJ
Hi, Happy.
HAPPY
Uh... not by choice.
PETER
MJ says hi.
HAPPY
(to MJ, waves)
Hello.
EXT. MIDTOWN HIGH - ESTABLISHING SHOT - DAY
BETTY (V.O.)
We’re covering the first day of
senior year from Midtown High’s
most famous student...
Just outside the front doors, it’s CHAOS. FANS, PROTESTERS,
REPORTERS, etc. Including BETTY BRANT, in school reporter
mode.
25.
26.
BETTY
Peter Parker! Go get ‘em, tiger.
Or should I say, “Spider?”
Peter, MJ, and Ned walk down the corridor of chaos.
NEWS REPORTER (V.O.)
The crowd has continued to grow
here all morning long at the
Midtown School of Science and
Technology--
Peter and MJ hold hands in support of one another.
ANOTHER NEWS REPORTER (V.O.)
The crowd seems evenly divided
between supporters of Spider-Man
and protestors.
CROWD MEMBER #1
MJ! MJ! MJ! We love you!
A MAN with MJ’s face printed on his shirt yells for her
attention.
CROWD MEMBER #1 (CONT'D)
MJ, are you going to have his
spider babies?!
The crowd is growing closer and closer to Peter and MJ. They
keep their heads down as SECURITY guides them through.
SECURITY GUARD
Back up! Back up!
CROWD MEMBER #2
You know he’s a murderer, right?!
CROWD MEMBER #3
Hey Peter, come here, do a TikTok
with me!
CROWD MEMBER #4
Hey! Let’s see you and MJ kiss!
NED
(to crowd)
Back off!
CROWD MEMBER #5
Who are you?
26.
27.
NED
I’m Ned Leeds, I’m Spider-Man’s
best friend--
FLASH
(stepping in)
--I’m Peter Parker’s best friend.
You come at my boy, you come at
Flash Thompson. And if you want to
read about our inspiring
friendship, you can now in my new
book--
Flash holds up a BOOK with his portrait on the cover.
FLASH (CONT'D)
--Flashpoint: One Spider, Two
Hearts, a Million Crazy-Ass
Memories. Check it out!
Ned walks off annoyed.
Peter and MJ are stopped at the bottom of the school steps.
Security scans Peter with a metal detector and separates him
from MJ.
PETER
No, I got to wait up--
FRONT DOOR GUARD
Go!
PETER
(to MJ)
I’ll see you inside, okay?
MJ nods, as she too is scanned with the metal detector.
INT. MIDTOWN HIGH - ENTRYWAY/HALLWAY - MOMENTS LATER (DAY)
STUDENTS watch Betty’s news coverage on the TVs.
BETTY (ON TV)
Keep watching Midtown News all year
as we bring you up close and
personal coverage of Peter fighting
his biggest battle yet: college
admissions.
Peter walks up the stairwell to find MR. DELL, MR.
HARRINGTON, and COACH WILSON waiting for him. It’s weird.
27.
28.
MR. DELL
(big smile)
Peter, we would love to welcome you
back to Midtown High, where we
shape heroes!
Mr. Harrington gestures to a nearby trophy case -- it’s been
turned into a SHRINE TO PETER. Above it is a homemade sign
that reads: “MIDTOWN HIGH -- WHERE WE SHAPE HEROES.”
COACH WILSON
Or murderers...
MR. HARRINGTON
Stop it.
(to Peter)
It’s an honor to serve you, sir.
Mr. Harrington salutes Peter. Is that a tear?
COACH WILSON
It’s not. Mysterio was right.
MR. HARRINGTON
Stop. We don’t--
COACH WILSON
Mysterio was right.
MR. HARRINGTON
That’s all--
(to Peter)
Some of the students put this
together for you.
Mr. Harrington and Mr. Dell redirect attention to the trophy
case.
COACH WILSON
(to Mr. Harrington)
No. You did that! You did that.
MR. HARRINGTON
I... I helped a little bit.
PETER
(politely)
Oh wow.
COACH WILSON
And I tried to stop you so many
times, but you powered through. He
did all of that.
28.
29.
MR. DELL
And he did a great job.
MR. HARRINGTON
(to Peter)
I hope you have time to stop and
check it out, in closeup.
MR. DELL
And feel free to walk -- or swing --
through the hallway, or crawl on
the ceiling to avoid everybody.
MR. HARRINGTON
We all know you can do it.
PETER
I’m just gonna...
As Peter heads off--
COACH WILSON
I know what you did.
MR. HARRINGTON
Stop it. You’re embarrassing
yourself.
COACH WILSON
(to Peter)
I know what you did.
MR. HARRINGTON
(to Peter, re: Coach
Wilson)
He’s a conspiracy theorist.
Peter, weirded out, walks down the long hallway of students,
all crowding and reaching to get his picture. It’s
incredibly awkward.
EXT. MIDTOWN ROOFTOP - LATER (DAY)
A total contrast. Quiet. No one around. MJ reads from The
New York Post, as Peter leans back and watches the clouds.
PETER
Can we just, like, stay up here all
day? It is so crazy down there.
On the front page of the paper: a depiction of Peter
controlling MJ and Ned with puppet strings. The headline
reads: “PETER PARKER & HIS SPIDER-MINIONS.”
29.
(MORE)
30.
MJ
(re: newspaper)
Oh wait, this one’s good.
(reading)
“Some suggest that Parker’s powers
include the male spider’s ability
to ‘hypnotize’ females, which he
used to seduce Jones-Watson into
his cult of personality.”
PETER
Oh come on... stop. Stop!
MJ
(mock trance-like)
Yes, my Spider-Lord.
It actually turns into a romantic moment, and they’re about
to kiss when...
Ned clambers up onto the roof.
NED
Finally, some privacy! It is so
crazy down there!
Ned plops down next to them. Romantic moment spoiled.
NED (CONT'D)
So, I was thinking, when we get
into MIT, we should live together.
PETER
Yeah, for sure.
MJ
Yeah, I’d love that.
Ned turns his laptop to show the MIT webpage -- a video of
students playing frisbee on the quad.
NED
This is gonna be us.
MJ
Yes, minus the frisbee. And the
smiling.
PETER
MIT’s obviously the dream, but if
we match up our backup schools,
then either way we’ll all be
together in Boston. New school.
New town. I can Spider-Man there.
(MORE)
30.
PETER (CONT'D)
31.
I mean, they have crime in Boston,
right?
MJ
Yes, yes they do.
NED
Yeah, wicked crime.
PETER
Yeah, so it’ll be like a fresh
start.
MJ sees how sincere he is, how much he wants this. But she’s
skeptical.
PETER (CONT'D)
What’s up?
MJ
(hesitant)
I don’t know, I just feel like if
you don’t-- If you expect
disappointment, then you can never
really get disappointed.
PETER
Come on.
Peter takes her hand.
PETER (CONT'D)
It’ll be a fresh start. And we’ll
all be together.
MJ
Yeah, no you’re right, yeah. Fresh
start.
PETER
Yeah.
Ned cluelessly takes their clasped hands -- another romantic
moment spoiled.
NED
Fresh start.
INT. HAPPY’S CONDO - KITCHEN - ANOTHER DAY
May holds up a (non-MIT) college admissions envelope. (In
the BG, DUM-E is just beginning to put together the LEGO
Death Star from HOMECOMING.)
PETER (CONT'D)
31.
32.
MAY
First one’s here!
CUT TO: May punches the letter. Rejection.
PETER
(still optimistic)
It’s okay. It’s a backup school.
INT. HAPPY’S CONDO - KITCHEN - ANOTHER DAY
May runs in with another letter.
MAY
Peter!
Peter webs down with a coffee cup and almost spills, excited.
CUT TO: Peter jumps up and down, eagerly awaiting May’s
reaction as she reads the letter. But she shakes her head.
PETER
No?
May shakes her head -- no.
INT. HAPPY’S CONDO - KITCHEN - ANOTHER DAY
May walks in with the final letter.
MAY
Last one.
Peter looks up from his bowl of cereal, mouth full.
PETER
MIT?!
DUM-E twists and hits the nearly completed LEGO Death Star.
It shatters into many pieces. Off Peter’s reaction...
EXT./INT. DONUT SHOP - DAY
Peter swings down in front of a donut shop decorated for
Halloween. Some PEDESTRIANS eye him warily.
Peter quickly enters the shop -- MIT envelope in tow -- and
spots MJ at the cash register in her waitress uniform.
She holds up her own MIT envelope -- ready?
32.
33.
They head to the back of the shop and join Ned at the
counter. He also has an MIT envelope resting in front of
him.
MJ
Okay... ready?
MJ’s BOSS approaches.
DONUT SHOP BOSS
Jones, I told you to take down the
Halloween decorations.
MJ
Actually that was Sasha, so--
DONUT SHOP BOSS
Enough attitude, just do it.
MJ
(swallowing pride)
On it.
NED
I feel like I’m gonna puke.
MJ
Well don’t... because he will just
make me clean it.
NED
This is our only shot. It’s here
or nowhere.
PETER
Hey, come on!
MJ
Okay, you guys ready?
PETER/NED
Yeah...
MJ
Okay. On three? One, two, three--
Deep breaths, then each opens their letter and reads...
Peter’s face falls -- the most painful rejection of all. He
looks to MJ. She shakes her head.
MJ (CONT'D)
No.
33.
34.
PETER
No.
(to Ned)
You?
NED
(reading)
“In light of recent controversy, we
are unable to consider your
application at this time.”
PETER
This is so not fair. I mean, this
is so not fair! I didn’t do
anything wrong. I mean, you guys
definitely didn’t do anything
wrong.
MJ
Expect disappointment and you will
never get disappointed.
Suddenly, Flash enters, sporting an MIT sweatshirt. He
begins singing the BEASTIE BOYS’ “NO SLEEP TILL BROOKLYN.”
FLASH
“No sleep till -- bum-bum, bumbuuuum... Boston!”
He looks to the others -- so? Gets nothing.
FLASH (CONT'D)
You guys didn’t get in?
NED
Yeah, because we’re actually
friends with Spider-Man.
Flash checks his watch.
FLASH
Uh yeah, I better get going.
There’s a-- They have a mixer for
new admissions and... sorry, guys.
Flash quickly retreats out the door.
DONUT SHOP BOSS (O.S.)
Jones, what are you doing? Get
back to work.
MJ
Yeah, I’m coming.
34.
35.
MJ rips up her letter.
MJ (CONT'D)
You know what? I wouldn’t change a
thing I did.
NED
Me neither.
Ned rips his letter up too. Then, picking up the pieces:
NED (CONT'D)
Although, I do need to show this
letter to my parents.
Peter watches Ned slump away. He feels guilty and hopeless,
until...
Peter’s eyes fall upon the decorations MJ is taking down. A
set of Halloween lights that look like... wizards? Off
Peter, getting an idea--
EXT. SANCTUM SANCTORUM - 177A BLEEKER STREET - LATER (DAY)
Peter approaches, about to ring the bell when... The doors
swing open to REVEAL--
INT. SANCTUM SANCTORUM - FOYER - CONTINUOUS (DAY)
SNOW. Everywhere. Covering the floor and the stairway. Two
APPRENTICES futilely shovel snow into small buckets.
Peter enters, CRUNCHING through the snow, shivering.
PETER
(to Apprentices)
Um. Hi.
(they stop)
Hi? I’m, uh--
WONG
The most famous person in the
world, I know.
WONG enters from a PORTAL, sets down several suitcases.
WONG (CONT'D)
Wong. Try not to slip, we don’t
have liability insurance.
35.
(MORE)
36.
PETER
(re: snow)
Is all this for a holiday party?
WONG
No, one of the Rotunda Gateways
connects to Siberia. A blizzard
blasted through.
A BLAST OF COLD AIR! Reveal DR. STRANGE in a parka, floating
down the stairway with a mug of hot cocoa.
DR. STRANGE
(re: Wong, pointed)
Because someone forgot to cast the
monthly maintenance spell to keep
the seals tight.
WONG
(re: Strange, pointed)
That’s right, he did, because he
forgot I now have higher duties--
DR. STRANGE
(balking)
“Higher duties?!”
WONG
The Sorcerer Supreme has higher
duties, yes.
PETER
(to Dr. Strange)
Wait, I thought you were the
Sorcerer Supreme--
DR. STRANGE
(defensive)
No, he got it on a technicality
‘cause I blipped for five years.
PETER
Oh.
(to Wong)
Well, congratulations.
DR. STRANGE
If I’d been here, then I would have--
WONG
Burned the place down.
(moving off, to
Apprentices)
(MORE)
36.
WONG (CONT'D)
37.
You two! No one said, “Stop
shoveling!”
DR. STRANGE
So, Peter. To what do I owe the
pleasure?
Peter is hesitant, shivering, slips a little on the snow...
PETER
Right, um... I’m really sorry to
bother you, sir, but--
DR. STRANGE
Please, we saved half the universe
together, I think we’re beyond you
calling me “sir.”
Dr. Strange lights the fireplace with magic.
PETER
Okay, uh... Stephen--
DR. STRANGE
That feels weird. But I’ll allow
it.
PETER
Uh, when, um... when Mysterio
revealed my identity, my entire
life got screwed up. And, I was
wondering... I mean, I don’t really
know if this would actually work,
but I was wondering if... maybe you
could go back in time and make it
so that he never did?
DR. STRANGE
Peter, we tampered with the
stability of spacetime to resurrect
countless lives. You want to do it
again now just ‘cause yours got
messy?
PETER
This isn’t-- It’s not about me. I
mean, this is really hurting a lot
of people. My uh... my Aunt May.
Happy. My best friend, my
girlfriend... their futures are
ruined. Just because they know me,
and they’ve done nothing wrong.
WONG (CONT'D)
37.
(MORE)
38.
DR. STRANGE
(sympathetic)
I am so sorry. But even if I
wanted to... I don’t have the Time
Stone anymore.
PETER
(deflated)
That’s right.
(then)
I’m really sorry if I wasted your
time.
DR. STRANGE
No, you didn’t--
PETER
Forget about it.
Wong picks up his suitcases.
WONG
Oh, he will. He’s very good at
forgetting things.
DR. STRANGE
(getting idea)
Wong, you’ve actually generated a
good idea.
WONG
What?
DR. STRANGE
The Runes of Kof-Kol.
PETER
(intrigued)
The Runes of Kof-Kol...?
DR. STRANGE
Oh, it’s just a standard spell of
forgetting. It won’t turn back
time, but at least people will
forget that you were ever SpiderMan.
PETER
Seriously? That would be--
WONG
No, not seriously.
(to Dr. Strange)
(MORE)
38.
WONG (CONT'D)
(MORE)
39.
That spell travels the dark borders
between known and unknown reality.
It’s too dangerous.
DR. STRANGE
We’ve used it for a lot less. Do
you remember the full moon party at
Kamar-Taj?
WONG
No...
DR. STRANGE
Exactly.
Dr. Strange and Peter wait for Wong to relent. But Wong only
stares back, unwavering.
DR. STRANGE (CONT'D)
Come on. Wong.... hasn’t he been
through enough?
Wong’s face softens. Just behind him, a PORTAL OPENS.
WONG
Just leave me out of this.
Wong enters the PORTAL--
DR. STRANGE
Fine.
WONG
Fine.
The PORTAL CLOSES. Dr. Strange turns to Peter... and grins.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - MOMENTS LATER (DAY)
Peter follows Dr. Strange downstairs into an ancient sublevel filled with crypts.
As Dr. Strange prepares items for the spell, Peter looks
around, spooked.
PETER
So what is this place?
DR. STRANGE
The Sanctum’s built at the
intersection of cosmic energy
currents. We weren’t the first to
seek ‘em out.
WONG (CONT'D)
(MORE)
39.
DR. STRANGE (CONT'D)
40.
Some of these walls are thousands
of years old.
(then)
And they shot an episode of The
Equalizer here in the ‘80s.
PETER
Well, I um... really appreciate you
doing this for me, sir.
DR. STRANGE
Don’t mention it. And don’t call
me sir.
PETER
Right, sorry.
DR. STRANGE
You ready?
PETER
I’m ready.
DR. STRANGE
Nice knowing you, Spider-Man.
Dr. Strange begins to cast the spell -- A GOLDEN RING OF
RUNES encircles them...
PETER
Wait, excuse me?
DR. STRANGE
The entire world’s about to forget
that Peter Parker is Spider-Man,
including me.
PETER
Everyone?
(panicking)
Uh... can’t some people still know?
DR. STRANGE
That’s not how the spell works.
And it’s very difficult and
dangerous to change it, midcasting.
PETER
So my girlfriend’s just gonna
forget about everything we’ve been
through? I mean, is she even gonna
be my girlfriend?
DR. STRANGE (CONT'D)
40.
41.
DR. STRANGE
That depends. Was she your
girlfriend just ‘cause you’re
Spider-Man, or--
PETER
I mean, I don’t know. I really
hope not!
DR. STRANGE
All right, fine.
Strange works to adjust the spell.
DR. STRANGE (CONT'D)
Everyone in the world’s gonna
forget that you’re Spider-Man,
except your girlfriend.
PETER
Thank you so much, that--
(then, realizing)
Oh my God, Ned. Ned!
DR. STRANGE
What is a “Ned?”
PETER
He’s my best friend, so it’s really
important to me that Ned knows.
Strange sighs, works to adjust the spell. Again.
DR. STRANGE
(trying to concentrate)
Okay. Let’s not change the
parameters of this spell any more
while I’m casting it.
PETER
Okay, I’m done. I’m done. I swear
I’m done. I’m done.
(beat, still processing)
Ah! But my Aunt May should really
know!
DR. STRANGE
Peter, stop tampering with the
spell.
Strange swipes his hands, begins further spell adjustments.
FOUR GOLDEN RINGS OF RUNES now swirl about them.
41.
42.
PETER
When she found out that I was
Spider-Man, it was really messy and
I don’t think that I can go through
with that again.
(beat)
So, my Aunt May?
DR. STRANGE
Yes!
PETER
Oh, thank you, thank you--
(then, realizing)
Happy?
DR. STRANGE
No, I’m annoyed!
PETER
No, it’s a nickname. Harold
“Happy” Hogan. He used to work for
Tony Stark, but then he was kind of
dating my aunt, and they broke up--
The spell SHIFTS, WAVERING, becoming ERRATIC...
DR. STRANGE
Would you just stop talking!
BOOM! The spell ERUPTS! Dr. Strange is LIFTED TO HIS FEET,
followed by Peter.
INT. SANCTUM SANCTORUM - FOYER - SAME TIME (DAY)
UPSTAIRS, ON THE APPRENTICES: One of them reaches for a
shaking relic (the same one Thor knocked over in RAGNAROK).
Too late. It falls apart.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - SAME TIME (DAY)
BACK ON PETER AND STRANGE: The jumbled spell BILLOWS in rings
around them. The room SHATTERS and SHAKES. Something is
clearly, horribly wrong!
Peter shouts over the chaos:
PETER
Basically everyone that knew that I
was Spider-Man before should still
know!
42.
43.
LIGHTS AND NOISE! Strange STRUGGLES WITH THE SPELL as it
BLASTS its way around them, ripping apart the crypt walls...
UNUSUAL SHADOWS appear...
With great effort, Strange shrinks the spell smaller and
smaller, until--
Peter and Strange DROP to the ground, the walls around them
reassembled and whole.
Peter turns to see -- the spell is now a ball of light,
TRAPPED INSIDE A PENTAGON-SHAPED ORB.
PETER (CONT'D)
Did it work?
DR. STRANGE
No. You changed my spell six times--
PETER
(meekly)
Five times.
DR. STRANGE
You changed my spell! You don’t do
that! I told you--
(re: trapped spell)
And that is why!
They regard the now-tiny spell jostling within the orb.
DR. STRANGE (CONT'D)
That spell was completely out of
control. If I hadn’t shut it down,
something catastrophic could have
happened!
PETER
Stephen, listen, I am so sorry--
DR. STRANGE
Call me sir.
A beat as that lands on Peter.
PETER
Sorry, sir.
DR. STRANGE
You know, after everything we’ve
been through together, somehow I
always forget you’re... you’re just
a kid.
43.
44.
The words weigh heavily on Peter. Now feeling lower than
low. Strange clocks it and softens.
DR. STRANGE (CONT'D)
Look, Parker, the problem is not
Mysterio. It’s you. Trying to
live two different lives, and the
longer you do that the more
dangerous it becomes. Believe me.
(then)
I’m so sorry about you and your
friends not getting into college.
But if they rejected you, and you
tried to convince them to
reconsider, there’s nothing else
you can do.
PETER
(beat, then)
When you say “convince them,” you
mean like I could have called them?
DR. STRANGE
Yeah.
PETER
I can do that?
DR. STRANGE
(incredulous)
You haven’t called the--
PETER
Well, I mean, I got their letter
and I assumed that that was--
DR. STRANGE
I’m sorry, are you telling me that
you didn’t even think to plead your
case with them first before you
asked me to brainwash the entire
world?!
PETER
Well, I mean, when you put it like
that, then--
SMASH TO:
EXT. SANCTUM SANCTORUM - 177A BLEEKER STREET - LATER (DAY)
BAM! The doors SLAM SHUT in Peter’s face. He quickly grabs
his phone and dials.
44.
45.
PETER
Come on, pick up, pick up, pick up,
pick up...
INT. MIT CLUB LOUNGE - INTERCUT - SAME TIME (DAY)
The MIT new students mixer. KIDS and ADULTS mingle. Flash
answers his phone:
FLASH
(into phone)
Dude, what? I’m busy.
PETER
Flash, where’s the MIT mixer?
FLASH
Why?
PETER
Because I need to come and talk to
someone. I’m trying to get Ned and
MJ a second chance at getting in.
FLASH
What’s in it for me? I’m risking a
lot just talking to you.
PETER
(sighs)
Okay, I will, um... pick you up and
swing you to school for one week?
FLASH
For a month.
PETER
For a week.
FLASH
Two weeks.
PETER
Flash, please come on, help me!
FLASH
(insistent)
You know what I want.
PETER
Okay, I’ll tell everyone that
you’re my best friend.
45.
46.
Flash grins, loving this.
PETER (CONT'D)
Flash, please help me!
FLASH
Cool, cool, cool. So there’s this
lady, she’s the Assistant Vice
Chancellor. You can plead your
case with her.
PETER
Okay, perfect. Where is she?
FLASH
She left.
PETER
To go where?
FLASH
To the airport.
EXT. HIGH BRIDGE - LATER (DAY)
Spider-Man soars above the High Bridge in his Iron Spider
suit. He reaches a highway sign overlooking a traffic jam.
ON PETER’S HUD--
MALE IRON SPIDER VOICE (V.O.)
Stark Network unavailable.
Spider-Man groans.
A text from Flash comes through: “HERES DA LADY UR LOOKING
4.” Then a selfie of Flash and the ASSISTANT VICE CHANCELLOR
(AVC) holding his Flashpoint book.
MALE IRON SPIDER VOICE (V.O.)
Facial recognition unavailable.
A DAILY BUGLE HELICOPTER approaches, filming Spider-Man --
his new normal.
SPIDER-MAN
Ugh...
(waves)
Hi. Yeah, I can see you!
Spider-Man drops down to the road. The Iron Spider Suit
retracts to reveal Peter is wearing a crumpled suit.
46.
47.
He quickly searches the surrounding cars for the AVC, when--
A BARKING dog lunges at him from a nearby window. Peter
jumps back, startled.
Then he peers into another window. A TODDLER BOY and a
TEENAGE GIRL notice him. The Toddler waves.
TODDLER BOY
That’s Peter Parker.
Peter waves back. As the Teenage Girl reacts--
TEENAGE GIRL
Mom? Mom, look! Look, it’s Peter
Parker!
Peter moves on, spotting the AVC in the backseat of an SUV.
INT. AVC SUV - SAME TIME (DAY)
In the backseat, the AVC is on her phone. She peruses
Flash’s book.
EXT. HIGH BRIDGE - INTERCUT - SAME TIME (DAY)
Just outside, Peter dodges a taxi--
TAXI DRIVER
Hey!
--And steels himself to approach the AVC’s car.
PETER
Okay...
He KNOCKS on her window and waves. The AVC ends her call and
rolls down her window. Reluctant.
ASSISTANT VICE CHANCELLOR
Yeah?
PETER
Hi, I’m Peter Parker.
ASSISTANT VICE CHANCELLOR
You do know you’re in the street,
right?
PETER
Yeah. I’m sorry. I just-- I
really needed to talk to you--
47.
48.
ASSISTANT VICE CHANCELLOR
Uh-huh.
PETER
--And I know you’re on your way to
the airport.
ASSISTANT VICE CHANCELLOR
Uh-huh.
PETER
(nervous rattling)
MJ Watson and Ned Leeds are the two
smartest people I’ve ever met in my
entire life, and I’m the dumbest
person because I let them help me.
But if I didn’t let them help me
than millions of people would have
died. So please don’t-- Don’t let
MIT be dumb like me.
ASSISTANT VICE CHANCELLOR
MIT is dumb?
PETER
(stumbling)
No, I’m saying don’t let MIT be
dumb. I mean, like the dumber
version of me that wouldn’t have
let them help.
ASSISTANT VICE CHANCELLOR
You didn’t rehearse that, did you,
Peter?
PETER
Basically, what I’m trying to sa--
Peter’s SPIDER-SENSE TINGLES. He jumps on top of the car,
spots PEOPLE running away. He turns to one of them:
PETER (CONT'D)
Why are you running? What--
UP AHEAD: CRASH! Patches of the highway CRUMBLE in a cloud
of asphalt and dust.
Peter activates his Iron Spider suit.
SPIDER-MAN
Oh my God...
He KNOCKS on the roof of the car.
48.
49.
SPIDER-MAN (CONT'D)
Uh, Ma’am, you should, uh... you
should get out of the car.
(then, calling out)
Everybody get off the bridge!
The AVC’s DRIVER runs off. The AVC tries to get out too, but--
ASSISTANT VICE CHANCELLOR
The door’s locked. Doors-- Hey!
CRASH! SLAM! BOOM! Something is piercing its way through
the High Bridge roadway. Something with FOUR GIANT METAL
TENTACLES. The dust clears to REVEAL...
DOC OCK (Alfred Molina) in all his SPIDER-MAN 2 glory!
DOC OCK
Hello, Peter.
SPIDER-MAN
(confused)
Hi? Do we... do I know you?
DOC OCK
What have you done with my machine?
SPIDER-MAN
Your mach-- I don’t know what
you’re talking about? I don’t--
What machine?
DOC OCK
The power of the sun in the palm of
my hand. It’s gone!
SPIDER-MAN
Listen, sir, if you stop smashing
cars, we could work together and I
can help you find your machine.
DOC OCK
You want to play games?
One of Doc Ock’s tentacles PIERCES the roof of a nearby car.
The PASSENGERS scramble, as Ock FLINGS the car at Spider-Man--
DOC OCK (CONT'D)
Catch!
Spider-Man flies backwards, dodging the empty vehicle, as
ANOTHER CAR is immediately thrown in front of him -- this one
FULL OF PEOPLE!
49.
50.
Spider-Man attempts to stop it, but both he and the vehicle
are spun over the bridge.
As the family inside reels, Spider-Man runs across the length
of the spinning car, WEBBING it to the underside of the
bridge. He rips a side door open...
ANGLE ON the AVC, finally able to open her door, but-- SLAM!
ASSISTANT VICE CHANCELLOR
Agh!
The door is pinned against a K-Rail. She still can’t get
out.
BACK ON Spider-Man, now on top of the bridge, alongside the
family he just saved.
SPIDER-MAN
It’s okay. You guys are good,
you’re safe, get out of here!
As the family quickly runs off, THUNK! One of Doc Ock’s
tentacles GRABS Spider-Man, wrapping him tight in its grip.
DOC OCK
You think your fancy new suit’s
gonna save you?
Another tentacle claw clutches Spider-Man’s head and FLINGS
him into the AVC’s car -- forcing the vehicle over the edge
of the bridge, the AVC still trapped inside!
Doc Ock then HURLS Spider-Man through a highway sign, CRASHLANDING into a truck’s windshield.
Doc Ock’s tentacles skewer a car engine -- it EXPLODES -- as
he relentlessly pursues Spider-Man.
DOC OCK (CONT'D)
I should have killed your little
girlfriend when I had the chance.
Metal pierces through the roof of the truck to reveal SpiderMan, his IRON SPIDER ARMS fully deployed.
SPIDER-MAN
What did you just say?
DOC OCK
(to tentacles)
Looks like we’ve got competition.
50.
51.
SPIDER-MAN VS. DOC OCK! Mano-a-mano-a-mano-a-etc! The DAILY
BUGLE HELICOPTER witnessing all.
Spider-Man WEBS on top of a highway sign, Doc Ock following.
Spider-Man fires webs! Flips! Kicks back Ock, then--
ASSISTANT VICE CHANCELLOR (O.S.)
Peter! Help!
Spider-Man turns, spots the AVC’s teetering car. He leaps
towards her, but--
THUNK! THUNK! Doc Ock’s tentacles grab Spider-Man’s arms in
a vice, as another tentacle latches onto the DAILY BUGLE
HELICOPTER.
Doc Ock lifts Spider-Man up towards the ROTATING BLADES of
the helicopter, Spider-Man fighting against it, until--
He WEBS two cars, YANKING them towards the highway sign,
CRASHING into Doc Ock. The tentacles release, the Iron
Spider Arms retract, and Spider-Man makes a break for the
AVC’s car.
Doc Ock grabs CEMENT PIPES off a nearby truck and swings them
over his head, directly into Spider-Man’s path.
FLIPS! SOMERSAULTS! FLINGING WEBS! Spider-Man is nearly at
the AVC’s car...
SPIDER-MAN
Don’t worry, ma’am! I’m coming!
He’s SLAMMED into the side of a car by one of the pipes. He
quickly recovers and takes off, the AVC’s SUV beginning to
fall--
ASSISTANT VICE CHANCELLOR (O.S.)
Peter!
The AVC GASPS, CLICKS her seatbelt on--
Doc Ock flings a car at Spider-Man, who flips backwards,
arching over the roof of the thrown vehicle until--
SPLASH! The car barrels into impact attenuators full of
water.
Spider-Man quickly WEBS the AVC’s car as it FALLS!
He is dragged along behind it, his IRON SPIDER ARMS deploying
to grab onto the edge of the bridge, as the car plummets to
the train tracks below!
51.
52.
A SUDDEN WRENCH! The vehicle stops just short of a MOVING
FREIGHT TRAIN!
Inside the car, the AVC trembles, in shock, as Spider-Man
WEBS the car securely to the bridge. Then lowers himself to
her door...
SPIDER-MAN
Ma’am? Just stay calm. Just take
a deep breath. Are you okay?
ASSISTANT VICE CHANCELLOR
No!
Spider-Man turns, sees Doc Ock approaching. A tentacle GRABS
Spider-Man and YANKS him away. As he’s WHIPPED around--
SPIDER-MAN
(to AVC)
I promise... I’ve got this... all
under... control...
Doc Ock SMASHES Spider-Man through the bridge, then PINS HIM
AGAINST the underside.
A tentacle claw RIPS OFF Spider-Man’s chest of nanotech,
revealing his crumpled suit beneath.
MALE IRON SPIDER VOICE (V.O.)
Suit compromised.
DOC OCK
(impressed)
Nanotechnology. Ah, you’ve outdone
yourself, Peter.
The Iron Spider nanotech begins to MELD WITH DOC OCK’S
TENTACLES -- transforming them into a hybrid of Ock’s AI-tech
and Stark’s nanotech.
DOC OCK (CONT'D)
I underestimated you. But now you
die.
As Doc Ock launches a killing blow--
The Iron Spider tech defensively shifts nanos to cover SpiderMan’s chest... EXPOSING PETER’S FACE.
DOC OCK (CONT'D)
(confused)
You’re not Peter Parker.
52.
53.
PETER
Ugh, I am so confused right now.
From inside her dangling car, the AVC looks on as Doc Ock’s
tentacles seem to be... malfunctioning?
DOC OCK
(re: tentacles)
What’s happening?
MALE IRON SPIDER VOICE (V.O.)
New device detected.
A HOLOGRAPHIC IMAGE of Ock’s tentacles appear on Peter’s
control panel. He pushes several buttons until...
MALE IRON SPIDER VOICE (V.O.)
Pairing new device.
The IRON SPIDER SUIT IS CONNECTED -- Peter is now in control
of the tentacles!
DOC OCK
(to tentacles)
You don’t listen to him, you listen
to me!
Peter tests the connection -- the tentacles follow his every
move. He laughs, relieved.
PETER
Hey.
Peter waves at Doc Ock. A tentacle claw waves back.
With the connection secure, Peter launches a tentacle arm at
the AVC’s dangling car.
Ock swings at Peter, but he can’t even get close. Peter
laughs, then gently rotates the tentacles...
DOC OCK
(to tentacles)
Hey-- Hey! Listen to me! No, not
him, me!
Peter carefully sets the AVC’s car, Doc Ock, and himself back
on top of the bridge.
The Iron Spider Suit retracts to reveal Peter’s rumpled suit,
his tie now cut in half. Peter RIPS the door off the AVC’s
car.
53.
54.
PETER
Ma’am, are you okay? Come on, you
could still make your flight.
ASSISTANT VICE CHANCELLOR
(shaken, but relieved)
Peter... you’re a hero.
PETER
No, well, I’m-- No. I’m--
ASSISTANT VICE CHANCELLOR
I’m gonna talk to Admissions about
your friends. And I’m gonna talk
to them about you.
PETER
No, but, ma’am, this isn’t about
me.
ASSISTANT VICE CHANCELLOR
I am going to talk to them about
your friends and you. Okay?
PETER
Really?
ASSISTANT VICE CHANCELLOR
And if you keep your noses clean,
maybe you’ll have a fair shot. Here--
She shoves her bag into his arms.
ASSISTANT VICE CHANCELLOR (CONT'D)
Get out of the way. Let me get
that man.
(to Doc Ock)
Hey! You! I see you. Come here!
That was not okay. Unbelievable!
As she walks off, Doc Ock tries once more to grab Peter. But
yet again, he’s held in place by his tentacles.
PETER
Hey! Hey, hey, hey-- Until you
stop trying to kill me...
(re: Iron Spider controls)
I’m in control, buddy. Of this
whole tentacle situation you got
going on here. Okay?! Now who are
you? What is going--
Peter’s SPIDER-SENSE alerts him to the horizon. He wraps a
tentacle around Doc Ock, holding him in place.
54.
55.
DINK, DINK, DINK! A pumpkin bomb lands on the road. Who
could it be...?
BOOM-BANG! The bomb detonates!
Peter activates his Iron Spider suit, as from out of the
smoke and flames comes an EVIL CACKLE, then--
GREEN GOBLIN (Willem Dafoe) from SPIDER-MAN! Perched atop
his glider.
DOC OCK
Osborn?
As the glider flies towards them -- a RING OF SPARKS! SpiderMan and Doc Ock DISAPPEAR.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - CONTINUOUS (DAY)
WHOOSH! Spider-Man MATERIALIZES. Alone in the dark. He
looks around, confused. SPIDER-SENSES FLARING. Cautious,
Peter deactivates the Iron Spider suit, takes a few steps--
PETER
Doctor--
ROAR! A creature LUNGES with slashing claws and teeth!
Peter jumps back in shock, as the monster HITS AN INVISIBLE
BARRIER. In a cell.
LIZARD (Rhys Ifans)! From THE AMAZING SPIDER-MAN!
Doc Ock STORMS at Peter -- THUD! He too hits an INVISIBLE
BARRIER. In a cell.
Peter staggers backward. A HAND clamps his shoulder--
Peter SCREAMS, whips around--
Reveal Dr. Strange, now battered and bruised.
DR. STRANGE
Be careful what you wish for,
Parker.
Ock POUNDS on the barrier.
DOC OCK
Let me out of here!
55.
56.
PETER
Can you please explain to me what
is going on?
DR. STRANGE
That little spell that you botched
where you wanted everyone to forget
that Peter Parker’s Spider-Man, it
started pulling in everyone who
knows Peter Parker’s Spider-Man --
from every universe -- into this
one.
PETER
From “every universe”?
DOC OCK
(to Dr. Strange)
Who are you? And where am I?!
DR. STRANGE
(ignoring Ock, to Peter)
I think it’s better we don’t engage
with them because frankly the
Multiverse is a concept about which
we know frighteningly little--
PETER
(amazed)
The Multiverse is real?!
DR. STRANGE
(sighs)
This shouldn’t even be possible.
PETER
But I thought you stopped the
spell.
DR. STRANGE
No, I contained it.
(re: Doc Ock)
But it would appear that a few of
them squeaked through.
Off Peter, mind blown--
DR. STRANGE (CONT'D)
After you left, I detected an
otherworldly presence, I pursued it
into the sewers, where I found that--
(re: Lizard)
--Slimy, green son of a gun.
56.
57.
DOC OCK
“Spell?” As in magic? What is
this, a birthday party? Who is
this clown? What is this madness?!
DR. STRANGE
(to Peter)
Watch this.
(then, to Doc Ock)
Do you know a Peter Parker who’s
Spider-Man?
DOC OCK
Yes.
DR. STRANGE
(points at Peter)
Is that him?
DOC OCK
No.
DR. STRANGE
(to Peter)
See?
As Peter considers that...
DR. STRANGE (CONT'D)
Okay, here’s what we gotta do. I
don’t know how many of these
“visitors” we’ve got--
PETER
I saw another one. On the bridge.
He was like a... like a flying
green elf.
DR. STRANGE
Well he sounds jolly. Why don’t
you start with him. I need you to
capture them, bring them here,
while I figure out how to get them
back before they destroy the fabric
of reality. Or worse, Wong finds
out.
Dr. Strange heads for the exit.
PETER
Uh... Dr. Strange?
57.
58.
DR. STRANGE
(stopping, annoyed)
What?
PETER
My friends and I just got a second
chance to get into MIT, and if the
school sees me fighting these crazy
monsters, then--
DOC OCK
Hey, watch your mouth!
PETER
I’m sorry, but--
DR. STRANGE
You’re seriously still talking
about college?!
Strange magically flies one of Peter’s web shooters off his
wrist and into his hand. He sends a SWIRL OF MAGIC into it.
PETER
Hey, what did you just do?
DR. STRANGE
This.
Strange aims the web shooter and... THWIP! WEBS PETER! ZAP!
Peter DISAPPEARS. WHOOSH! And REAPPEARS. Inside a cell.
PETER
Hey, you can’t just--
Peter walks into the magical cell wall.
DOC OCK
(dumfounded, to Dr.
Strange)
How did you do that?
DR. STRANGE
Lots of birthday parties.
Strange crosses to an ANCIENT STONE DIAL and turns it.
Peter’s cell barrier drops, and he steps out.
PETER
Hey--
Dr. Strange flies the enchanted web shooter back onto Peter’s
hand.
58.
59.
PETER (CONT'D)
(taking it in)
Whoa...
DR. STRANGE
One shot, send them here, move on.
You’re welcome. Get to work.
As Strange moves off--
PETER
Sir?
DR. STRANGE
(sighs)
Now what?
PETER
I know this is my mess, and I swear
to you that I’ll fix it, but I’m
gonna need some help.
Beat. Off Strange, considering...
INT. SANCTUM SANCTORUM - FOYER - LATER (DAY)
Ned and MJ are led in by an unhappy Dr. Strange.
NED
(awestruck)
I can’t believe I’m in the Sanctum
Sanctorum!
DR. STRANGE
(sotto)
Neither can I.
NED
So, how did you know you were made
of magic? Because my nana says
that we have it in our family and
sometimes I get these tinglings in
my hands--
DR. STRANGE
You should talk to your physician.
MJ
Peter!
Peter walks up from the basement.
59.
60.
PETER
Hey!
MJ
Hey!
Peter and MJ hug.
PETER
I’m so sorry for dragging you into
this. Listen, you just gotta help
me find these guys--
MJ
You don’t have to apologize, okay?
You got us a second shot at MIT.
NED
So, how did the bad guys get here?
Peter hesitates. Dr. Strange doesn’t.
DR. STRANGE
He screwed up a spell trying to get
you into college.
MJ
Wait, what? I thought it was
the MIT lady you saved.
NED
You did it with magic?!
PETER
Uh, no, that was after. Listen
let’s just focus on the good news,
okay?
DR. STRANGE
No, let’s just focus on the bad
news: as of now, you have detected
zero multiversal trespassers, so...
get on your phones, scour the
Internet, and Scooby-Doo this shit.
MJ
(laughs, then)
You’re telling us what to do even
though it was your spell that got
screwed up, meaning that all of
this is kinda your mess. You know,
I know a couple of magic words
myself, starting with the word
“please.”
Dr. Strange softens, charmed.
60.
61.
DR. STRANGE
Please Scooby-Doo this shit.
(then)
You can work in the Undercroft.
NED
(awed)
The Undercroft?!
INT. SANCTUM SANCTORUM - UNDERCROFT/ANCIENT CHAMBER - MOMENTS
LATER (DAY)
A lightbulb turns on to REVEAL... The Undercroft, a.k.a. a
normal, boring basement.
NED
Badass!
BUZZ! A nearby dryer signal goes off. Ned, MJ, and Peter
take in the Christmas decorations, camping stuff... Ned grabs
a crossbow, in awe.
PETER
Guys, listen, about this whole
spell thing--
MJ
It’s totally okay.
PETER
Wait really?
MJ
Yeah. I mean, I get it. You were
just trying to fix things. And so,
maybe just run it by us next time,
you know? That way when you’re
thinking, “Hey, I’m about to do
something that could break the
universe,” we could, like, help
you. Workshop something... or
brainstorm ideas...
A smirk between them. MJ giving him shit. Becoming a
genuine look. MJ forgiving him. Peter grateful for her.
PETER
Deal.
Peter’s eyes shift to Ned -- will he forgive him?
PETER (CONT'D)
Ned?
61.
62.
NED
Oh, dude, I don’t care. It’s
seriously not a big deal. Um--
(then, excited)
Oh! A torture rack!
MJ
That is a Pilates machine.
(then, pointing to other
room)
That is...?
PETER
The crypt.
MJ
Okay, so... we get the rest of the
guys, you zap them, Dr. Magic will
send them back. And when we get
into MIT, a round of stale donuts,
my treat.
NED
Let’s catch some Multiverse Men.
DOC OCK
Hey!
Reveal Doc Ock watching Ned and MJ from his cell.
DOC OCK (CONT'D)
Who the hell are these two?
PETER
These are my friends. This is MJ
and uh, this is Ned.
MJ
Hey.
NED
Hello.
PETER
Uh, I’m sorry, what was your name
again?
DOC OCK
Doctor Otto Octavius.
A beat, then... they all laugh.
PETER
Wait, no seriously, what’s your
actual name?
62.
63.
NED
Oh, is that a dinosaur?!
From his cell, Lizard scowls, unamused.
INT. SANCTUM SANCTORUM - UNDERCROFT/ANCIENT CHAMBER - LATER
(DAY)
ANGLE ON the holographic Iron Spider controls in command over
Doc Ock’s tentacles.
QUICK POPS:
-- Peter pulls his suit covered in green paint out of his
backpack.
-- As Peter grabs cleaning supplies, a doll on the shelf
turns its face towards him.
-- MJ scrolls through TikTok news updates on her phone.
-- ZIP! Ned opens his backpack, pulls out his laptop, and
turns it on.
-- Curious, MJ pulls a box from a shelf, is surprised to
read... it’s a goatee template?
-- Lizard sits in his cell, bored. Tosses a stone pebble.
Peter scrubs his suit while on the phone with May.
MAY (OVER PHONE)
If the paint won’t come off, bring
it by the shelter and I’ll get it
out.
PETER
(into phone)
No, no, no... May, we gotta find
these guys first.
MAY (OVER PHONE)
Well, finish your mission and then
come by. We’re having a canned
food drive.
Peter turns his suit inside out to REVEAL A BLACK AND GOLD
INTERIOR, devoid of green paint.
PETER
(sotto)
That could work.
63.
64.
NED
Uh, I got one, I got one, I got
one...
PETER
(into phone)
Uh May, I gotta go, I’ll call you
back.
MAY
Okay, love you! Bye!
Peter hangs up, joins MJ and Ned in front of Ned’s laptop.
NED
I mean, you can take the guy out of
the chair, but you can’t take the
chair out of the guy.
MJ cocks her head -- not sure about that one.
PETER
What’d you find?
NED
Uh, there’s a...
(reading)
“...disturbance near a military
research facility outside of the
city.” And witnesses say that they
saw a monster flying through the
air.
PETER
That’s got to be the guy I saw on
the bridge right?
DOC OCK (O.S.)
That’s impossible.
Peter, Ned, and MJ look up at Doc Ock in his cell. As Peter
moves towards him:
PETER
You know him, don’t you? On the
bridge, you said his name.
DOC OCK
Norman Osborn. Brilliant
scientist. Military research. But
he was greedy. Misguided.
PETER
What happened to him?
64.
65.
Ock lunges forward, straining against the tentacles holding
him in place.
DOC OCK
We tire of your questions, boy!
PETER
Okay. Um... I gotta go.
(to Ned)
Where am I going?
DOC OCK
It can’t be him.
MJ
Why?
DOC OCK
Because Norman Osborn died. Years
ago. So either we saw someone
else. Or you’re flying out into
the darkness to fight a ghost.
Off Peter, unsettled...
EXT. POWER LINES - SUNSET
Spider-Man swings -- HIS SUIT TURNED INSIDE OUT, BLACK AND
GOLD -- along high-tension power lines strung between giant
transmission towers.
INT. SANCTUM SANCTORUM - UNDERCROFT - THAT NIGHT
Ned opens the fridge door, pauses to examine boxes of takeout
alongside otherworldly specimens held in old mason jars.
What the...?
Ned joins MJ at his laptop.
MJ
(into laptop camera)
Keep an eye out on the trees. We
don’t really know where this guy
is.
ON NED’S LAPTOP: a live-feed of Spider-Man’s POV as he
swings.
EXT. POWER LINES/EXT. FOREST - SAME TIME (NIGHT)
REVEAL Spider-Man’s CELL PHONE, duct-taped to his chest.
65.
66.
ON THE SCREEN: MJ and Ned (via FaceTime).
[NOTE: This device is used throughout the following sequence.
MJ and Ned participate in the action, right along with SpiderMan, their reactions visible on Spider-Man’s chest.]
MJ (ON PHONE SCREEN)
I genuinely don’t know how you do
this without throwing up.
Spider-Man swings down from the power lines, landing in a
dark forest.
He walks forward, on alert... when SOMETHING MOVES THROUGH
THE TREES!
SPIDER-MAN
Did you guys see that?
MJ (ON PHONE SCREEN)
Um... no?
NED (ON PHONE SCREEN)
It’s really dark.
More RUSTLING, now in the trees behind Spider-Man. He turns--
But nothing’s there. In the distance, an owl CALLS. The
wind WHISTLES through the trees...
SPIDER-MAN
Okay, okay, okay...
Spider-Man continues on, searching, when--
He stops, SPIDER-SENSE flaring as an EERIE BLUE LIGHT
CRACKLES behind him.
NED (ON PHONE SCREEN)
What’s happening?
MJ (ON PHONE SCREEN)
Peter, what is it?
Spider-Man readies his web shooter. Three glowing rings
appear...
MJ (ON PHONE SCREEN) (CONT'D)
Are you getting, like, the tingle
thing? Is the tingle thing
happening? Is your tingle
tingling?
Spider-Man quickly turns to see--
66.
67.
A BLUE GHOST. Hovering above the power lines, drawing energy
from them.
ELECTRO (Jamie Foxx) from THE AMAZING SPIDER-MAN 2! His
spectral form at the movie’s end.
SPIDER-MAN
Are you guys seeing this?
MJ (ON PHONE SCREEN)
Yeah...
NED (ON PHONE SCREEN)
Osborn?
SPIDER-MAN
No. He was green, this guy’s blue.
(calls out)
Uh... you wouldn’t happen to be
from another universe, would you?
No reply, save for the CRACKLING BURSTS of electricity.
MJ (ON PHONE SCREEN)
What’s he doing?
INT. SANCTUM SANCTORUM - UNDERCROFT - SAME TIME (NIGHT)
ANGLE ON Ned and MJ, watching this all on Ned’s laptop.
SPIDER-MAN (OVER LAPTOP SPEAKERS)
I don’t know. It looks like he’s
charging.
MJ shakes her head, concerned.
MJ
I don’t like this. Just web him.
EXT. POWER LINES/EXT. FOREST - SAME TIME (NIGHT)
Spider-Man MAGIC-WEBS at Electro...
But the web goes through his spectral form and hits a tree.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - SAME TIME (NIGHT)
WHOOSH! A HUGE TREE appears in a cell, CRUNCHED into the
confines of the space! MJ and Ned react, startled.
67.
68.
MJ/NED
Whoa!
EXT. POWER LINES/EXT. FOREST - SAME TIME (NIGHT)
CLOSE ON Electro as he JOLTS AWAKE! He spots Spider-Man--
Electro BLASTS BOLT AFTER BOLT at a retreating Spider-Man.
On his cellphone screen, Ned and MJ try to direct him:
NED (ON PHONE SCREEN)
Dude, go left! Left, dude, left!
Left, go-- Left, yes!
MJ (ON PHONE SCREEN)
(to Ned)
What are you doing?
(to Spider-Man)
Go right!
Over their ongoing “advice”...
SPIDER-MAN
Guys! This is not helping!
Electro suddenly appears before Spider-Man. With a BLAST, he
sends Spider-Man tumbling to the ground.
INT. SANCTUM SANCTORUM - UNDERCROFT - SAME TIME (NIGHT)
Ned’s laptop screen sputters, losing connection...
MJ
Oh, no, no, no... what happened?
Peter?
NED
(panicking)
Uh...
MJ
Peter!
EXT. POWER LINES/EXT. FOREST - SAME TIME (NIGHT)
Spider-Man writhes on the ground, reeling from the blast.
Suddenly--
Electro charges at him, shooting another bolt, when--
68.
69.
A WALL OF SAND whirls up and takes the brunt of the shock...
out of the swirling mass, a face appears...
SPIDER-MAN
Whoa!
It’s SANDMAN (Thomas Haden Church) from SPIDER-MAN 3!
SANDMAN
Peter, it’s me! Flint Marko! You
remember?
SPIDER-MAN
I’m Peter, but I’m not your Peter.
SANDMAN
What do you mean you’re “not my
Peter?” What the hell is going on?!
SPIDER-MAN
I’ll explain everything. But
first, can you help me stop this
guy?
SANDMAN
Okay.
SPIDER-MAN
You try to surround him and I’ll
pull the plug. All right, let’s
go!
Spider-Man WEBS and SWINGS back up into the fight, Sandman
acting as a wall of protective sand around him.
SPIDER-MAN AND SANDMAN VS. ELECTRO!
Electro launching electricity bolts!
Sandman turns into a SAND TYPHOON, swirling around Electro.
Spider-Man lands on a transmission tower, DODGES blast after
blast of electricity...
Sandman’s face appears in the swirling typhoon.
SANDMAN
I can’t... hold him much longer!
SPIDER-MAN
I got it, I got it!
One by one, Spider-Man WEBS the various transmission
towers... pulling back... SPARKS! The lines begin to rip...
69.
70.
Electro’s body grows dimmer as he draws less and less
power...
Spider-Man SEVERS the last power line and is THROWN BACK,
slide-landing onto the ground.
Electro expends his seemingly last BLAST -- before falling to
the ground.
Sandman appears at Spider-Man’s side as he peels off his
mask.
SANDMAN
A different Peter. Weird.
Peter slaps Sandman’s hand--
PETER
Thanks.
--Sandman’s hand scatters in the wind.
PETER (CONT'D)
Sorry.
SANDMAN
Don’t worry about it.
Reveal Electro. Now in HUMAN FORM. He looks around,
remnants of electricity CRACKLING down his arm...
ELECTRO
I got my body back.
PETER
Hey, um... this is gonna sound
really crazy, but uh... this isn’t
your universe.
ELECTRO
Another universe?
PETER
Uh-huh.
SANDMAN
What?!
ELECTRO
That’s what I was feeling. The
power, it’s different... I like it!
As Electro’s eyes FLASH--
70.
71.
SANDMAN
Easy, buddy.
PETER
It’s actually my fault that you’re
here.
ELECTRO
Like... like the universe? Or the
woods? I hate the woods.
PETER
I meant the universe, sir.
ELECTRO
So what? Y’all just gonna stand
here and act like I ain’t butt-ass
naked?
SANDMAN
I am.
Peter quickly looks away...
PETER
Uh, no, no... uh... I uh--
Peter looks aside, sees a UTILITY SHED with some line worker
clothes inside.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - MOMENTS LATER
(NIGHT)
WHOOSH! Electro MATERIALIZES in a cell in ConEd clothes. MJ
and Ned react -- whoa. As Doc Ock waves to Electro from his
own cell...
EXT. POWER LINES/EXT. FOREST - SAME TIME (NIGHT)
Sandman reacts to Peter magic-webbing Electro, spooked.
SANDMAN
What was that? What did you just
do to him?
PETER
No, no, no, it’s okay, it’s okay,
it’s okay...
SANDMAN
Did you kill him?
71.
72.
Sandman is becoming angry.
PETER
Whoa, whoa, whoa, listen, I can
explain everything. You just have
to trust me, please just trust me--
SANDMAN
I don’t trust you! I don’t know
you!
Sandman lunges at Peter -- who FIRES his magic web shooter.
WHOOSH! Sandman’s gone.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - CONTINUOUS (NIGHT)
Sandman MATERIALIZES in an empty cell. Furious, he pounds
his fists against the barrier.
SANDMAN
Ugh, what is this?!
ELECTRO
You picked the wrong side.
Electro hears laughter -- looks over, spots Lizard.
ELECTRO (CONT'D)
Connors?
DOC OCK
Wait. You know this creature?
ELECTRO
No, no, no, no... not a creature.
A man.
Ned and MJ watch this whole scene play out.
NED
Whoa, same universes.
ELECTRO
Dr. Curt Connors. He was a
scientist at Oscorp when I worked
there. A brilliant scientist.
Until he turned himself into a
lizard. Then he tried to turn the
whole city into lizards, it was
crazy!
72.
73.
LIZARD
It wasn’t crazy, Max. It was the
next step in human evolution.
NED
The dinosaur can talk?!
MJ
Lizard.
NED
Right.
LIZARD
Speaking of which -- what happened
to you? Last I recall, you had bad
teeth, glasses, and a combover.
Did you get a makeover? You know I
can give you a real makeover.
ELECTRO
Let me guess, into a lizard?
LIZARD
Exactly!
SANDMAN
Would you two just shut up?! Where
are we?
NED
It’s complicated--
MJ
A wizard’s dungeon.
ELECTRO
A wizard’s... a wizard’s dungeon?
MJ
There’s no real way to sugar coat
that. It’s literally the dungeon
of a wizard.
ELECTRO
Look, you can keep your magic.
(re: glowing hands)
I want a taste of that new energy I
just felt.
The overhead lights flicker.
MJ’s phone RINGS. She answers.
73.
74.
MJ
(into phone)
Oh, Peter, hey!
EXT. POWER LINES/EXT. FOREST - INTERCUT - SAME TIME (NIGHT)
Peter is on the phone, surrounded by downed power lines.
PETER
(into phone)
Hey, uh... did those guys come
through yet? There should be an
electric guy and a sand guy.
MJ
Yeah, they’re all here and locked
up.
PETER
(into phone)
Okay, perfect. I’m gonna just stay
here for a bit and try and fix some
of this damage so they don’t blame
it on me again.
MJ
Okay.
PETER
But hey, I uh... I couldn’t do any
of this without you so... thank
you.
MJ
Yeah, of course.
Ned inspects the tree in one of the cells, turns to MJ.
NED
Hey, ask him if this is, like, a
tree monster, or like a scientist
that turned into a tree...?
ELECTRO
It’s just a tree, man. Just a
tree.
EXT. NEW YORK CITY SKYLINE - ESTABLISHING SHOT - DAWN
Day breaks through the skyline of Manhattan.
74.
75.
EXT. NYC ALLEY - MORNING
In a deserted alley, NORMAN OSBORN desperately tries to cover
up the Goblin Glider with trash.
GREEN GOBLIN (V.O.)
Coward! We have a new world to
conquer.
Norman turns, sees the Green Goblin mask hanging on a nearby
dumpster. He trembles with fear.
GREEN GOBLIN (V.O.)
You make me sick.
NORMAN
Leave me alone. Please...
GREEN GOBLIN (V.O.)
Hiding in the shadows. Hiding from
who you truly are.
NORMAN
No!
GREEN GOBLIN (V.O.)
You can’t escape yourself!
Norman picks up a brick and SMASHES the mask. He runs off,
Green Goblin’s CACKLING LAUGHTER echoing around him...
EXT. POWER LINES/EXT. FOREST - MORNING
Peter swings down, looks at his handiwork -- power lines held
together precariously with a lot of webs.
His phone VIBRATES with a call from May.
PETER
(into phone)
Hey, May.
MAY (OVER PHONE)
Hey, Peter. I’m at work and um...
(whispers)
One of the guys you’re looking for
just walked in.
Off Peter’s concerned face...
75.
(MORE)
76.
EXT. F.E.A.S.T. SHELTER - LATER (MORNING)
A billboard for the F.E.A.S.T. shelter featuring a waving
Spider-Man. But someone has crossed out his face and
graffitied “MYSTERIO WAS RIGHT.”
Spider-Man SWINGS past the sign, landing in front of the
shelter doors. He quickly runs inside--
INT. F.E.A.S.T. SHELTER - CONTINUOUS (MORNING)
Spider-Man searches, frantic. He pulls off his mask.
PETER
May! Where’s May?
A FOOD SERVICE WORKER points Peter towards the kitchen.
PETER (CONT'D)
Thank you!
Peter takes off, rounding the kitchen door to find...
MAY HAVING TEA WITH NORMAN OSBORN.
No armor. Dressed in ill-fitting clothes from the donation
bin. Nursing tea in a mug, he looks tired, disoriented...
even fragile.
MAY
Ah, hey, here he is! Norman, this
is my nephew.
Peter is totally thrown.
PETER
Norman Osborn? I thought that you--
NORMAN
I saw Spider-Man in an ad for this
place. And I thought he could help
me. But you’re not him.
PETER
Wait, so you want Spider-Man’s
help?
MAY
He... he just wandered in.
NORMAN
I didn’t know where else to go.
Someone’s living in my house.
(MORE)
76.
NORMAN (CONT'D)
77.
Oscorp doesn’t exist. My son...
(beat, then)
Sometimes I’m not myself. I’m...
someone else.
MAY
Uh huh.
NORMAN
And every time he’s in control, I
can’t remember.
MAY
Who is that?
NORMAN
And now I’m here--
MAY
Who’s “in control?”
NORMAN
--In this place--
MAY
Norman, who’s in control?
NORMAN
--In this city, and I don’t know--
MAY
Uh huh.
NORMAN
--I don’t know why, what’s going on
with me? And I don’t--
May tries to calm him, comfort him.
MAY
Okay, okay, okay...
NORMAN
It doesn’t make sense.
May pulls Peter aside.
MAY
He’s lost. And I don’t mean just
in the cosmos, I mean in his mind.
Are they all like this?
PETER
Yeah.
NORMAN (CONT'D)
77.
78.
MAY
Yeah?!
PETER
Well, I mean, they all have their
own mental and physical issues.
MAY
Well, he needs help, and maybe they
all do.
PETER
Wait, you don’t mean--? No May,
this isn’t my problem.
MAY
Peter. Not your problem?
May locks eyes with Peter -- is he being honest with her and
himself?
MAY (CONT'D)
Hmm?
PETER
May, their chance of getting help
is way better back where they came
from. Sending them home, that’s
the best thing that we can do for
them.
MAY
For them? Or for yourself?
Her words hit Peter hard. She’s guiding him, but leaving the
choice open. He hesitates.
MAY (CONT'D)
Look around you. This is what we
do. We help people.
PETER
This is what’s best. For them.
Trust me.
Off May, not entirely sold by that...
INT. DAILY BUGLE CONTROL ROOM - DAY
Daily Bugle EMPLOYEES in a TV control room watch as J. Jonah
Jameson wraps up a segment.
78.
79.
J. JONAH JAMESON (ON SCREEN)
But the fact remains, Spider-Man is
a menace! We’ll be right back...
INT. DAILY BUGLE STUDIO - SAME TIME (DAY)
Reveal J. Jonah behind a desk in a professional news studio.
He gestures to a bottle of vitamins at his side.
J. JONAH JAMESON
...After a brief word from Daily
Bugle Supplements. The only other
daily fix you need.
PRODUCER (O.S.)
And we’re out.
J. Jonah answers his phone:
J. JONAH JAMESON
What?
EXT. F.E.A.S.T. SHELTER - INTERCUT - SAME TIME (DAY)
A DAILY BUGLE LACKEY sits in a parked car. He watches as a
truck from the shelter pulls away.
DAILY BUGLE LACKEY
(into phone)
I got eyes on him. He’s with his
aunt, some guy I don’t know.
J. JONAH JAMESON
(into phone)
You sure?
DAILY BUGLE LACKEY (O.S.)
They’re just leaving the shelter.
J. JONAH JAMESON
Okay, don’t lose him!
As J. Jonah eagerly walks off set...
EXT. SANCTUM SANCTORUM/INT. SHELTER TRUCK - LATER (DAY)
May parks the F.E.A.S.T. truck outside the Sanctum Sanctorum.
As Peter and Norman exit--
79.
80.
NORMAN
Thanks, May! Hope to see you
again.
MAY
Hey...
Peter turns back to his aunt.
MAY (CONT'D)
He trusts you. So do I.
A beat as Peter takes that in, then--
PETER
Thanks for cleaning my suit.
Reveal Peter in his black and red suit (no longer turned
inside-out, the green paint removed).
As Peter hops out of the van:
PETER (CONT'D)
I’ll see you later!
INT. SANCTUM BASEMENT - UNDERCROFT - MOMENTS LATER (DAY)
Peter walks Norman over to MJ and Ned, who are seated in
front of Ned’s laptop. They turn.
PETER
Um, guys, this is uh... Mr. Osborn.
NORMAN
(correcting)
It’s Doctor.
PETER
Sorry. Um, Doctor Osborn, these
are my friends. This is Ned and
MJ.
NORMAN
Mary Jane?
MJ
It’s Michelle Jones, actually.
Norman reacts, understanding. Another universe.
NORMAN
Fascinating...
80.
81.
His attention is then drawn to the imprisoned villains below.
NED
(aside, to MJ)
Do you think there are other Ned
Leeds-es?
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - CONTINUOUS (DAY)
Norman looks around, then spots Doc Ock in his cell.
NORMAN
Octavius?
DOC OCK
(amazed)
...Osborn?
NORMAN
(re: Ock’s tentacles)
What... what happened to you?
DOC OCK
What happened to-- You're the
walking corpse!
NORMAN
What do you mean?
DOC OCK
You died, Norman. Years ago.
Peter looks up, having overheard.
NORMAN
You're insane.
ELECTRO
God, I love it here.
Peter enters, gestures at Norman.
PETER
(to Doc Ock)
What are you talking about? He's
standing right there. He's not--
SANDMAN
Dead. They both died. Fighting
Spider-Man.
Norman looks to Peter -- is this true? But Peter is just as
shocked as him.
81.
82.
SANDMAN (CONT'D)
It was all over the news. Green
Goblin? Impaled by the glider you
flew around on.
As this sinks in for Norman, Sandman turns to Doc Ock.
SANDMAN (CONT'D)
And a couple years later, you, Doc
Ock, drowned in the river with your
machine.
DOC OCK
That’s nonsense! Spider-Man was
trying to stop my fusion reactor.
So I stopped him! I had him by the
throat and then I...
(struggling to remember)
And then I was here.
ELECTRO
Oh please, let me tell you
something. I was whooping SpiderMan’s ass -- he’ll tell you. And
then he caused an overload, I was
stuck in the grid, absorbing data,
I was about to turn into pure
energy and then-- And then, uh--
And then--
(realizes)
Oh, shit. I was about to die.
LIZARD
Max, do you know -- do I die?
MJ and Ned join Peter, alarmed by what they’re hearing.
WHOOSH! A PORTAL OPENS. Dr. Strange enters with an
elaborately designed puzzle box, the corrupted spell trapped
inside.
He spots Norman.
DR. STRANGE
Oh great, you caught another one.
Strange flicks his wrist--
PETER
No no no, wait, Strange, he's not--
--And transports Norman into a cell.
82.
83.
PETER (CONT'D)
(to Norman)
It's okay. Um...
(then, re: The Box)
What is that?
DR. STRANGE
It’s an ancient relic. La Macchina
di Kadavus. I’ve trapped your
corrupted spell inside, and once I
finish the proper ritual, it’ll
reverse the spell. And send these
guys back to their universes.
DOC OCK
And then what? We perish?
ELECTRO
Nah, no thanks, I’ll pass on that.
NORMAN
Let me out of here. Peter!
PETER
Strange, we can't send them back.
Not yet.
Strange reacts -- not yet?
DR. STRANGE
Why?
PETER
Some of these guys are gonna die.
DR. STRANGE
Parker... it’s their fate.
PETER
Come on, Strange. Have a heart.
DR. STRANGE
In the grand calculus of the
Multiverse, their sacrifice means
infinitely more than their lives.
Peter takes that in, conflicted.
DR. STRANGE (CONT'D)
I’m sorry, kid. If they die, they
die.
Dr. Strange turns back to solving The Box. Peter turns to
Ned and MJ -- what should he do?
83.
84.
GOLDEN LIGHT begins to envelope the villains in their cells.
NORMAN
Peter!
The villains react, nervous and uneasy, as the GOLDEN LIGHT
around them glows brighter...
The Box is almost solved. A triangular BUTTON appears on
top. As Strange goes to press it...
TWHIP! Peter WEBS The Box.
DR. STRANGE
Don't!
Peter YANKS The Box away just as-- THWIP! He MAGIC WEBS Dr.
Strange into Sandman’s cell!
NED
Dude, what are you doing?
MJ
Peter, you better go. Go!
As Peter takes off running, Dr. Strange frees himself from
Sandman.
DR. STRANGE
This is why I never had kids.
Strange easily walks out of the cell, while Sandman SMACKS
into the transparent wall.
EXT. SANCTUM SANCTORUM - MOMENTS LATER (DAY)
Spider-Man races outside with The Box and WEBS AWAY -- right
into a SERIES OF PORTALS that appear before him.
WHOOSH! He comes out of one and lands right back in front of
the Sanctum. Dr. Strange glares at him.
DR. STRANGE
Give me The Box.
SPIDER-MAN
No.
Spider-Man tries to MAGIC WEB Dr. Strange, but the shooter
malfunctions... then completely DISAPPEARS!
SPIDER-MAN (CONT'D)
Whoa!
84.
85.
Spider-Man quickly WBES away with The Box. But his web flies
into a PORTAL... and out another... WEBBING HIS OWN FOOT.
He’s stuck, dangling between the two portals, struggling.
Using an Eldritch Whip, Dr. Strange pulls Spider-Man down and
KNOCKS HIS ASTRAL BODY OUT OF HIS PHYSICAL BODY.
Ghostlike, Spider-Man’s Astral Body -- in the form of Peter
Parker -- floats nearby.
PETER (ASTRAL BODY)
Oh my God, I’m dead.
DR. STRANGE
You’re not dead. You’ve just been
separated from your physical form.
PETER (ASTRAL BODY)
My physical-- What?!
Spider-Man’s Physical Body stands there, seemingly lifeless,
holding The Box. Dr. Strange reaches for The Box--
But Spider-Man’s Physical Body moves The Box away. Somehow
Astral Peter is controlling Spider-Man’s Physical Body!
DR. STRANGE
How are you doing that?
PETER (ASTRAL BODY)
I have no idea...
DR. STRANGE
(reaching for The Box)
You should not... be able... to do
that.
PETER (ASTRAL BODY)
(re: astral form)
This feels amazing.
Astral Peter “swims” back to reenter his Physical Body...
Spider-Man’s immediately TOSSED BACK onto the road. He flips
upright.
SPIDER-MAN
That might have been one of the
coolest things that’s ever happened
to me. But don’t ever do that
again.
Spider-Man WEBS off with The Box. Dr. Strange sends the
Cloak of Levitation after him. WHOOSH!
85.
86.
The Cloak GRABS onto Peter.
SPIDER-MAN (CONT'D)
Hey-- get off of me!
Cloak flings Spider-Man back. With a flick of his wrist, Dr.
Strange sends Spider-Man crashing into--
EXT. THE MIRROR DIMENSION - NEW YORK CITY - CONTINUOUS (DAY)
An EXACT REPLICA of the city, but separated from the real
one, so they can fight unseen and without hurting anyone.
Spider-Man free-falls, tightly gripping The Box. Dr. Strange
flies after him, Cloak now billowing off his back.
Strange manipulates the Mirror Dimension...
A DEPARTMENT STORE FOLDS INTO ITSELF! Spider-Man WEBS,
deftly navigating the building as it bends its way around
him.
He hurtles out a window, making his way through Central Park,
still clutching The Box. Dr. Strange waves his hands to
create a MAGICAL CLOTHESLINE. WHACK! Spider-Man is flung
backwards--
Right into the path of a SUBWAY TRAIN, roaring out of a
PORTAL opened by Strange! The Box lands on the train’s roof.
As Dr. Strange goes to grab it--
Spider-Man WEBS The Box back. Strange sighs.
Spider-Man crawls on top of the train.
SPIDER-MAN
What is this place?
DR. STRANGE
The Mirror Dimension. Where I’m in
control.
Dr. Strange waves his hands, again altering the Mirror
Dimension. The skyscrapers of New York City fold, bending
into the rising peaks and valleys of--
EXT. THE MIRROR DIMENSION - NEW YORK CITY/THE GRAND CANYON -
CONTINUOUS (DAY)
The subway train careens through the two worlds of New York
City and the Grand Canyon, now fused together.
86.
87.
Spider-Man and Dr. Strange stand off on the train’s roof.
SPIDER-MAN
Strange, stop! Can we please just
talk about this?!
DR. STRANGE
Parker, don’t you realize that in
the Multiverse there are an
infinite number of people who know
Peter Parker is Spider-Man.
(re: Box)
And if that spell gets loose,
they’re all coming here!
SPIDER-MAN
Look, I know. I get it! But we
can’t just send them home to die.
DR. STRANGE
It’s their fate. You can’t change
that any more than you can change
who they are.
SPIDER-MAN
But what if we could? What if we
could change their fate?
Strange manipulates the Mirror Dimension...
SPIDER-MAN (CONT'D)
Whoa, whoa... what are you doing?
The train car duplicates again and again, becoming a spinning
vortex around Spider-Man.
As Spider-Man turns and runs off--
SPIDER-MAN (CONT'D)
I’m not giving you the-- Whoa!
Dr. Strange PORTALS him -- dropping Spider-Man down one
portal, through to the next, in a state of CONSTANT FREEFALL. As Peter drops in and out, over and over--
Cloak flies in and grabs The Box back!
Spider-Man. Cloak. Box. Spider-Man. Cloak. Box. Until--
Spider-Man WEBS the other side of Cloak, suspending them
between the two portals.
SPIDER-MAN (CONT'D)
Give me that back!
87.
88.
As Cloak and Spider-Man battle it out, Dr. Strange lassos
Cloak and The Box, pulling them away from Peter... bending
the two portals closer and closer towards each other, when--
WHOOSH! The two portals fall in on each other.
Everything begins SPINNING! New York streets
kaleidoscopically folding into Grand Canyon rock walls.
The Box goes flying. Dr. Strange, Cloak, and Spider-Man
plummet after it.
Spider-Man lands on top of a rock, noticing...
SPIDER-MAN (CONT'D)
Wait a minute. Is that an
Archimedean spiral? The Mirror
Dimension is just geometry? You’re
great at geometry! You can do
geometry!
Spider-Man WEBS off as Dr. Strange GRABS hold of The Box,
Cloak once more wrapped around him.
THWIP! THWIP! Spider-Man WEBS in random directions--
SPIDER-MAN (CONT'D)
Square the radius... divide by
Pi... at flat points along the
curve...
DR. STRANGE
It's over, Parker. I'll come pick
you up when it's done.
Dr. Strange opens a PORTAL back to the Sanctum.
As Spider-Man continues to WEB in random directions...
SPIDER-MAN
Hey, Strange! You know what’s
cooler than magic?
Dr. Strange’s foot snags on one of Spider-Man’s seemingly
random webs. Then the shifting of Mirror Dimension objects
brings another web right into him.
SPIDER-MAN (CONT'D)
Math!
Strange looks around. Webs everywhere, closing in on him as
the rocks turn and spin -- not so random after all -- as
Strange is completely ensnared in a web!
88.
89.
Spider-Man drops down in front of Dr. Strange and WEBS back
The Box.
DR. STRANGE
Don't do this.
Spider-Man WEBS the SLING RING off Dr. Strange’s finger.
DR. STRANGE (CONT'D)
Ow.
SPIDER-MAN
I’m sorry, sir. But--
He dives through the PORTAL with The Box and Sling Ring.
INT. SANCTUM SANCTORUM - ANCIENT CHAMBER - CONTINUOUS (DAY)
Spider-Man looks back through the PORTAL.
SPIDER-MAN
I have to try.
Dr. Strange stares back, equal parts furious and concerned,
as the PORTAL CLOSES.
Ned and MJ approach--
NED
Dude, what happened?
SPIDER-MAN
I just had a fight with Dr. Strange
and I totally won!
NED
What?!
SPIDER-MAN
Lookit, I stole his ring thing.
Ned grabs the ring from Peter.
NED
Whoa!
SPIDER-MAN
I was swinging through the city and
then I went through this massive--
He pulls off his mask.
89.
90.
PETER
--Mirror thing. And then I was
back in the city--
MJ
Where is he? Where is he--
PETER
Uh, he's trapped, but I'm not sure
for how long.
DOC OCK
You could have just left us to die.
Why didn't you?
MJ
‘Cause that's not who he is.
Peter reacts to these words, takes in the villains in their
cells.
PETER
I think I can help you guys. If I
can fix what happened to you, then
when you go back, things will be
different, and you might not die
fighting Spider-Man.
ELECTRO
What do you mean “fix” us?
PETER
Look, our technology is advanced,
and I’m--
NORMAN
I can help you. You know, I'm
something of a scientist myself.
Octavius knows what I can do.
DOC OCK
“Fix?” You mean like a dog? I
refuse.
PETER
I can’t promise you guys anything.
But at least this way you actually
get to go home and have a chance...
a second chance. I mean, come on.
Isn’t that worth trying?
90.
91.
LIZARD
Trust me, Peter. When you try to
fix people there are always
consequences.
PETER
I mean, you don’t have to come. I
also didn’t know that you could
talk.
Lizard shrugs.
PETER (CONT'D)
But if you stay here... you’re
gonna have to deal with the wizard.
LIZARD
Ah, so we go along or die. Not
much of a choice, is it?
SANDMAN
I just want to go home.
ELECTRO
Well, I myself don’t want to be
killed, especially by a guy dressed
like Dungeons & Dragons, so...
what’s your plan?
PETER
(lying)
I have it all under control.
Peter pulls Ned and MJ aside.
PETER (CONT'D)
(re: The Box)
What are we gonna do about this
thing?
MJ
Uh, well, we need to find somewhere
safe for it, right?
PETER
Yeah. Sure, right.
NED
Yes, yes.
PETER
(to MJ)
You gotta take it.
91.
92.
MJ
Wait, what?
PETER
If something bad happens, I'll text
you and then you just push this and
then it's all over and they’ll all
be gone.
MJ
Peter, we're going with you. We're
not gonna leave you.
PETER
You can't come with me, it's too
dangerous. You guys have already
done enough.
NED
Peter, we’re in this together.
PETER
I know we're in this together, Ned.
But I can't do this if I know that
you're in danger. Okay? So for
me, MJ, please, just take this?
...Please?
MJ
(caving)
Fine.
MJ takes The Box.
PETER
Thank you.
MJ
But Peter, I swear, if I don’t hear
from you, I’m pressing the button.
PETER
Sure.
MJ
Okay.
(to villains)
And I will do it!
ELECTRO
(skeptical)
Yeah, we all believe you, Michelle.
92.
93.
LIZARD
No way that’s his girlfriend. No
way.
PETER
(re: Box)
She’ll do it.
NED
Absolutely. She will.
Peter turns from the villains, back to Ned.
PETER
Okay. See you later?
NED
Be safe.
PETER
You too.
Peter and Ned do their special handshake from HOMECOMING. As
they bump hands, a SPARK emits from Dr. Strange’s Sling Ring.
PETER/NED
Whoa.
NED
Okay...
Ned heads off, as MJ kisses Peter goodbye.
MJ
Be careful, okay?
PETER
Yeah, you too.
MJ follows after Ned.
Peter turns to the villains.
PETER (CONT'D)
So, uh... who’s coming with me?
As Norman considers this, then Doc Ock...
ELECTRO
Well, I’m in. But... if this goes
sideways, imma fry you from the
inside out.
93.
94.
INT. HAPPY’S CONDO - LIVING ROOM - LATER (DAY)
CLICK. CLICK. CLICK. The many locks release and the door
opens. The villains hustle inside, past the security camera.
As May enters...
PETER
Where’s Connors?
MAY
He told me he wants to stay in the
truck.
PETER
Okay.
ALARM SYSTEM VOICE (V.O.)
Alarm system deactivated.
As Peter closes the door, he whispers aside to May:
PETER
Hey, May?
MAY
Yeah?
PETER
I feel kinda bad using Happy's
place like this.
MAY
No, no, no, he'll get over it.
REVEAL the absurd juxtaposition of the villains (sans Lizard)
in Happy’s bachelor pad:
Electro shoots energy at the TV, and shorts it out.
NEWS ANCHOR VOICE (FROM TV)
A majority of New Yorkers oppose
the Statue of Liberty’s renovation.
Sandman sits on the black leather sofa. Sand FALLS
everywhere.
SANDMAN
Oh... sorry.
He tries to brush it off the sofa. Unsuccessful.
Norman puzzles over DUM-E in the kitchen.
94.
95.
Doc Ock is wrapped into submission by his own tentacles. He
scowls.
DOC OCK
So this is your plan, Peter? Hmm?
No lab, no facilities, just
performing miracles in a
condominium? Hmm? What, are you
going to cook us some cures and
some frozen burritos in a
microwave?
NORMAN
I could go for a burrito.
DOC OCK
He's gonna kill us all.
PETER
Well, let’s hope not. You're up
first, Doc.
Ignoring Ock, Peter walks to the storage room.
DOC OCK
What? Hey, I told you, I don't
need fixing.
INT. HAPPY’S CONDO - STORAGE ROOM - CONTINUOUS (DAY)
As Peter enters...
DOC OCK
I don't need fixing!
INT. HAPPY’S CONDO - LIVING ROOM - SAME TIME (DAY)
Doc Ock fumes.
DOC OCK
Especially by a teenager using
scraps from a bachelor's junk
drawer.
Electro follows after Peter.
ELECTRO
Nah, nah, nah. He got something
back there. I can feel it. That
weird energy.
95.
96.
INT. HAPPY’S CONDO - STORAGE ROOM - SAME TIME (DAY)
CLOSE ON the tarp being removed from the large case (marked
“Stark Cases”) that Peter saw before.
Norman, Electro, and May enter--
NORMAN
What the hell is that?
PETER
It's a Fabricator.
Peter presses a button on the case -- it unfolds to reveal a
STARK FABRICATOR, a portable version of the machine Peter
used on the jet in FAR FROM HOME. Powered by an ARC REACTOR.
PETER (CONT'D)
It can analyze, design, construct
basically anything.
MAY
I thought that was the tanning bed
Happy broke.
ON THE FABRICATOR: readouts come alive, sections open and
extend outward, growing to full size.
Electro’s eyes light up at the sight of the arc reactor.
ELECTRO
Look at that.
The unfolding machine keels forward and--
INT. HAPPY’S CONDO - KITCHEN - SAME TIME (DAY)
WHAM! Punches a hole in the kitchen wall. Doc Ock glares.
DOC OCK
He's gonna kill us all.
EXT. HAPPY’S CONDO BUILDING - PLAZA - EARLY EVENING
Two PEDESTRIANS walk by the F.E.A.S.T. truck. BANG! RAWR!
As the truck gently shakes--
PEDESTRIAN
Whoa... what’s going on there?
96.
97.
INT. HAPPY’S CONDO - STORAGE ROOM - THAT NIGHT
Peter works at the Fabricator. CLOSE ON a holographic scan
of Doc Ock’s compromised chip.
PETER
So the chip in the back of Doc’s
neck was designed to protect his
brain from the A.I. system that’s
controlling these tentacles. But
if you look here...
Peter rotates the hologram with his hands. He singles out
the compromised chip.
PETER (CONT'D)
The chip is fried. So rather than
him being in control of the
tentacles, the tentacles are now in
control of him. Which I guess
explains why he is so miserable all
the time.
Norman takes in the holographic chip, intrigued and amazed.
INT. HAPPY’S CONDO - KITCHEN - NIGHT
ANGLE ON the holographic Iron Spider controls in command over
Doc Ock’s tentacles.
REVEAL Doc Ock, his tentacles still wrapped around him as
restraints. May taps one of them, holds up a glass of water.
MAY
Thirsty?
DOC OCK
Why yes, I am thirsty.
MAY
Fresh water or salt?
(off his look)
You know, because you're an
octopus?
DOC OCK
...What?
MAY
Fresh water it is.
97.
98.
INT. HAPPY’S CONDO - LIVING ROOM - NIGHT
By the windows, Electro stares out at the world.
ELECTRO
Look at this place. And all the
possibilities...
SANDMAN
What? This condo?
ELECTRO
Yeah, yeah, the condo. I love the
whole open floor plan. No. Nah,
man. I’m talking about the world.
(re: his cool new self)
I kind of like who I am here.
Electro glances toward the storage room... THE ARC REACTOR.
ELECTRO (CONT'D)
And all that power back there... I
could be so much more.
(then)
So why’d you come along?
SANDMAN
I have a daughter, and I want to
see her. But he’s not gonna send
anyone home until he’s finished his
little science project back there.
ELECTRO
You trust him?
SANDMAN
I don’t trust anyone.
(beat, then)
How’d you end up like that anyway?
ELECTRO
Oh, the place where I worked at,
they were experimenting with
electricity created by living
organisms and then, uh... I fell
into a vat of electric eels.
SANDMAN
You’re kidding. I fell into a
super collider.
ELECTRO
Damn. Gotta be careful where you
fall.
98.
99.
INT. HAPPY’S CONDO - STORAGE ROOM - NIGHT
The Fabricator holds the new MICROCHIP cure for Doc Ock.
Peter adds the final pieces, as Norman looks on.
NORMAN
Remarkable. The technology and
you. When all this is over, if you
need a job and you're willing to
commute to another universe...
The Fabricator HUMS. The chip is finished.
PETER
That worked! That totally worked!
Peter grabs the finished chip and races out of the room.
INT. HAPPY’S CONDO - KITCHEN/2ND FLOOR LANDING - CONT. (NIGHT)
Peter slides in with the new microchip, holds it up to May.
PETER
I got it. I did it, I did it.
Uh... would you send him up?
MAY
Here we go.
Peter starts bounding up the stairs, as May adjusts the
holographic Iron Spider controls. Peter suddenly stops,
takes off his magnifying glasses, and tosses them to May.
They almost hit the controls--
PETER
Sorry!
Ock’s tentacles begin to lift him upwards, towards the secondstory loft.
MAY
Hold on, Doc.
DOC OCK
Oh, will these humiliations never
cease?!
Peter reaches the second floor landing, Ock now suspended in
front of the railing. As Peter approaches--
DOC OCK (CONT'D)
You! Keep your science fair
project away from me!
99.
100.
NORMAN
(from below)
Hey, it’ll work. Have faith.
DOC OCK
Says the reckless fool who turned
himself into a monster.
Norman and Sandman look up from below as Peter tries to
implant the new chip.
PETER
Please stop moving your head. Hold
still.
DOC OCK
Don't you dare.
May, Norman, and Electro anxiously await the result, as Doc
Ock continues to squirm.
DOC OCK (CONT'D)
I swear, when I get out of this,
we’re gonna rip you a new--
CLOSE ON the new chip being gently attached to Doc Ock’s
inhibitor chip. Ock passes out.
PETER
...Doc?!
Electro looks up, waiting...
PETER (CONT'D)
Doc? Doc?! ...Doctor Octavi--
Ock GASPS, lifts his head. Amazed.
DOC OCK
It's so quiet. Those voices...
inside my head... I'd almost
forgotten.
NORMAN
Otto?
DOC OCK
Yes, Norman...
Ock’s tentacles lower him back to the ground. He stands
tall.
DOC OCK (CONT'D)
It’s me.
100.
101.
Electro looks on. Stunned. Disappointed. This decision is
real now.
Peter jumps down from the 2nd floor landing.
SANDMAN
(re: Doc Ock)
Would you look at that.
Peter uses the holographic Iron Spider controls to release
the hold over the tentacles. The nanotech reforms over
Peter’s red and black suit, forming a HYBRID SUIT.
Ock holds out his hand to Peter.
DOC OCK
I'm grateful, dear boy. Truly.
PETER
(shaking hands)
Yeah, you're welcome.
DOC OCK
How can I help?
INT. HAPPY’S CAR - NIGHT
Happy is speeding down the road. He calls Peter, gets his
voicemail.
PETER (OVER CAR SPEAKERS)
This is Peter. Leave a message.
HAPPY
Uh, yeah, Peter this is Happy. I
accessed my doorbell camera. Who
are those guys, huh? Is that a
cyborg? Did you bring a cyborg
with robot legs into my house? Is
one of the guys made of mud?
What's going on? Call me back.
INT. HAPPY’S CONDO - STORAGE ROOM - NIGHT
ON THE FABRICATOR as it manufactures more cures. Norman does
his own calculations off to the side.
DOC OCK
How does it feel, Norman? You’re
about to become whole again. No
more darker half. Just you.
101.
102.
NORMAN
Just me.
Norman turns to face Doc Ock and smiles. As Ock grins
back...
INT. HAPPY'S CONDO - KITCHEN - NIGHT
Electro and Peter sit at the kitchen table. Peter holds out
Electro’s cure device.
PETER
Okay, um... It just goes right
here.
Peter places the device onto Electro’s chest. IT ACTIVATES.
Electro looks uneasy.
PETER (CONT'D)
That should be drawing power now.
I’m gonna come back in a second
just to check on it. But...
Peter points out INDICATOR LIGHTS on the device.
PETER (CONT'D)
Keep an eye on the lights. When
they’re all green, it means that
all the electricity in your body’s
dissipated. Well, not all of the
electricity. I mean, obviously you
know that you need electricity for
your brain to function. Your
nervous system is--
(then)
I’m not really sure why I’m
explaining electricity to you.
ELECTRO
Can I ask you a question?
PETER
Sure.
ELECTRO
(re: kitchen table)
Are these your LEGOs?
An awkward beat. An ALERT SIGNALS from the storage room.
PETER
Uh, I gotta go. I’ll be back.
102.
103.
Peter walks off. Electro shifts, uncomfortable. He checks
the indicator lights. BEEP... ONE GREEN.
ELECTRO
Something feels off.
SANDMAN (O.S.)
What do you mean?
ELECTRO
I don’t like this.
Reveal Sandman watching from the windows.
SANDMAN
Leave it alone. The sooner you
guys get through this, the sooner
we go home.
BEEP... TWO GREEN. ANGLE ON Electro. Troubled. Changing
his mind?
EXT. HAPPY’S CONDO BUILDING - PLAZA - NIGHT
The Daily Bugle van screeches to a halt. J. Jonah gets out,
approaches the Daily Bugle Lackey.
J. JONAH JAMESON
Well? Where is he?
DAILY BUGLE LACKEY
(points)
Uh, he’s inside.
J. JONAH JAMESON
And yet here we are, outside. Did
you not hear me say, “Don’t lose
him?!”
DAILY BUGLE LACKEY
Yes, sir, I--
J. JONAH JAMESON
I want incriminating footage of
Spider-Man. I already called
Damage Control. They’re on their
way.
ANGLE ON the F.E.A.S.T. truck.
103.
104.
INT. F.E.A.S.T. TRUCK - SAME TIME (NIGHT)
Just inside, Lizard’s eyes narrow as he overhears.
LIZARD
And so it begins.
J. JONAH JAMESON (O.S.)
The place is about to be swarming
with cops!
INT. HAPPY'S CONDO - STORAGE ROOM - NIGHT
As Peter works on his Sandman cure, he stops abruptly, looks
around. SPIDER-SENSE GOING OFF.
DOC OCK
(noticing)
Peter?
NORMAN
What’s wrong?
PETER
I don’t know...
INT. HAPPY’S CONDO - KITCHEN/LIVING ROOM - CONTINUOUS (NIGHT)
Peter enters, Ock and Norman following.
PETER
May?
Something’s definitely wrong. May comes down the stairs.
MAY
What is it, Peter?
Electro and Sandman pick up on it too.
SANDMAN
What’s happening?
Peter searches, on alert. What is he sensing? Is one of
them about to betray him? Where is the threat?
ELECTRO
(on edge)
Why are you looking at me like
that?
Peter closes his eyes and focuses on his SPIDER-SENSE when--
104.
105.
THWIP! Peter WEBS NORMAN’S HAND to the robot arm of DUM-E!
GREEN GOBLIN
That’s some neat trick. That sense
of yours.
DOC OCK
Norman?
GREEN GOBLIN
Norman’s on sabbatical, honey.
ELECTRO
The hell?
PETER
(realizing)
Goblin.
Peter and May share a look of concern.
GREEN GOBLIN
“No more darker half?” Did you
really think that I’d let that
happen?
Off to the side, May quietly heads into the--
INT. HAPPY’S CONDO - STORAGE ROOM - CONTINUOUS (NIGHT)
As she searches for the cures...
GREEN GOBLIN (O.S.)
That I’d let you take away my power
just because you’re blind to what
true power can bring you.
INT. HAPPY’S CONDO - KITCHEN/LIVING ROOM - SAME TIME (NIGHT)
Back in the kitchen, Peter stares Goblin down.
PETER
You don’t know me.
GREEN GOBLIN
Don’t I?
INT. HAPPY’S CONDO - STORAGE ROOM - SAME TIME (NIGHT)
May grabs the cures, one-by-one, and shoves them into her
F.E.A.S.T. tote bag.
105.
106.
INT. HAPPY’S CONDO - KITCHEN/LIVING ROOM - SAME TIME (NIGHT)
Back in the kitchen--
GREEN GOBLIN
I saw how she trapped you.
May sneaks back in from the storage room, clutching the bag
of cures. She nods at Peter -- she has them.
GREEN GOBLIN (CONT'D)
Fighting her holy moral mission.
We don’t need you to save us... We
don’t need to be “fixed!”
ANGLE ON Sandman, taking this in. Goblin turns to the
others:
GREEN GOBLIN (CONT'D)
These are not curses.
Electro looks down at his cure device. BEEP... another GREEN
LIGHT.
GREEN GOBLIN (CONT'D)
They’re gifts.
DOC OCK
Norman, no.
GREEN GOBLIN
Quiet, lapdog.
PETER
You don’t know what you’re talking
about.
GREEN GOBLIN
I’ve watched you from deep behind
Norman’s cowardly eyes. Struggling
to have everything you want. While
the world tries to make you choose.
ANGLE ON Electro and his cure device -- BEEP! Only one more
light to go...
GREEN GOBLIN (CONT'D)
Gods don’t have to choose.
Electro looks at Norman, now really buying in...
GREEN GOBLIN (CONT'D)
We take.
106.
107.
PETER
May... RUN!
May breaks for the door with the bag of cures.
Electro RIPS the cure device off his chest, as Goblin tears
free from the web holding him to DUM-E.
With a BOLT OF ELECTRICITY, Electro reaches towards the
storage room--
CRASH! The ARC REACTOR tears free from the Fabricator,
bursts through the kitchen wall, and flies into Electro’s
hand... SURGING ELECTRIC CONTACT!
Goblin POUNCES on a distracted Peter. Freakishly strong.
SMASHING him into the stairs.
Seeing this, Sandman disintegrates into a whirl of sand.
Retreating.
INT. HAPPY’S CONDO - ELEVATOR HALLWAY - SAME TIME (NIGHT)
May runs to the elevators, pressing the “down” button over
and over...
INT. HAPPY'S CONDO - LIVING ROOM - SAME TIME (NIGHT)
Electro SURGES with arc power.
EXT. HAPPY’S CONDO BUILDING - SAME TIME (NIGHT)
Lights throughout the condo building FLICKER ON AND OFF.
INT. HAPPY’S CONDO - ELEVATOR HALLWAY - SAME TIME (NIGHT)
May looks up -- the hallway lights are flickering here too.
As she pushes the elevator “down” button once more...
INT. HAPPY'S CONDO - LIVING ROOM - SAME TIME (NIGHT)
Doc Ock looks at Electro in horror.
DOC OCK
Oh my God. What have you done?
ELECTRO
I liked you better before.
107.
108.
Electro unleashes a Stark-grade cascade of ELECTRICITY...
blowing Ock back through the living room wall!
EXT. HAPPY’S CONDO BUILDING - CONTINUOUS (NIGHT)
Ock tears through glass and steel before finally coming to a
wrenching stop -- his tentacle arms gripping the side of the
building.
EXT. HAPPY’S CONDO BUILDING - PLAZA - SAME TIME (NIGHT)
J. Jonah directs his CAMERAMAN.
J. JONAH JAMESON
(pointing)
Up here, he’s up there!
EXT. HAPPY’S CONDO BUILDING - SAME TIME (NIGHT)
NEWS CAMERA POV: Doc Ock climbs away, disappearing into the
night.
J. JONAH JAMESON (O.S.)
It’s the guy from the bridge!
INT. HAPPY’S CONDO - STAIRWELL - SAME TIME (NIGHT)
May heads for the emergency exit door, races downstairs.
INT. HAPPY’S CONDO - LIVING ROOM - SAME TIME (NIGHT)
Electro and the swirling cloud of sand that is Sandman
approach the burst-open living room wall.
Sandman propels himself forward, Electro following after...
transforming into a BEING OF PURE ELECTRICITY (like he was at
the power lines, but different -- arc energy).
EXT. HAPPY’S CONDO BUILDING - PLAZA - CONTINUOUS (NIGHT)
The shelter truck rocks violently. SLASH! SLASH! Lizard
EXPLODES out of the hole he cut open and runs off.
J. JONAH JAMESON
...Did you see that?!
POLICE and BYSTANDERS scramble for cover as Electro and
Sandman take to the wind and fly off...
108.
109.
INT. HAPPY’S CONDO - LIVING ROOM - SAME TIME (NIGHT)
Green Goblin SMASHES Peter through a window... but Peter
FIRES a web and pulls himself back inside... only to be FLUNG
through another window, out onto the balcony.
INT. HAPPY’S CONDO - STAIRWELL - SAME TIME (NIGHT)
The overhead lights flicker as May hurries down the stairs.
EXT. HAPPY’S CONDO BUILDING - BALCONY - SAME TIME (NIGHT)
Goblin pounces on Peter. Peter WEBS the balcony above to
flip himself on top of Green Goblin... SMASHING him down to
the balcony below...
EXT. HAPPY’S CONDO BUILDING - BALCONY BELOW - CONT. (NIGHT)
Peter tries to WEB away--
GREEN GOBLIN
No, you don’t!
Goblin grabs Peter’s leg and throws him through a window.
CRASH! Peter is taking a beating.
EXT. HAPPY’S CONDO BUILDING - SAME TIME (NIGHT)
The DAILY BUGLE HELICOPTER circles. Lights glaring.
Capturing everything on camera.
INT. HAPPY’S CONDO - HALLWAY - SAME TIME (NIGHT)
CRASH! Peter is thrown THROUGH A WALL and into a hallway.
Goblin KICKS through a door and steps out, looming over him.
GREEN GOBLIN
Strong enough to have it all...
Peter WEBS a table at Goblin. He knocks it away
effortlessly.
GREEN GOBLIN (CONT'D)
Too weak to take it!
Goblin PUNCHES Peter in the chest. Peter goes flying down
the hallway, but recovers and CHARGES! He jumps on top of
Goblin. Brutally PUNCHING, not holding back.
109.
110.
Goblin smiles at Peter taking punch after punch. He LAUGHS
maniacally.
Goblin effortlessly SMASHES Peter through the floor into the
hallway below.
PETER’S POV: Green Goblin looks down at him through the hole
in the floor, then disappears. Where is he going?
Peter struggles to his feet, hobbles towards a window, and
WEBS it open. He’s blinded by the helicopter’s LIGHTS as he
climbs outside--
EXT. HAPPY’S CONDO BUILDING - CONTINUOUS (NIGHT)
Peter climbs up the wall to the floor above. He stops to
catch his breath, looking down at all the damage below...
EXT. HAPPY’S CONDO BUILDING - PLAZA - SAME TIME (NIGHT)
J. Jonah spots him.
J. JONAH JAMESON
Now I’ve gotcha.
EXT. HAPPY’S CONDO BUILDING - SAME TIME (NIGHT)
ROAR! Lizard LEAPS onto Peter from above. They tumble down
the side of the building.
Lizard clutches Peter by the throat--
LIZARD
I told you there’d be consequences!
--And HURLS him through a window. As Lizard takes off...
INT. HAPPY’S CONDO - HALLWAY - SAME TIME (NIGHT)
Goblin seizes Peter, SMASHES him against the ceiling and then
down... through floor, after floor, after floor...
INT. HAPPY’S CONDO - LOBBY - SAME TIME (NIGHT)
May emerges from the stairs, runs towards the front doors--
BOOM! Peter and Goblin CRASH through the ceiling, landing in
the lobby. Goblin straddles Peter, strangling him.
110.
111.
May pulls something out of the bag of cures -- the Green
Goblin anti-serum!
GREEN GOBLIN
Your weakness, Peter, is morality.
It’s choking you!
Goblin squeezes harder -- Peter gasping for air...
GREEN GOBLIN (CONT'D)
Can’t you feel it?
May runs forward and STABS Goblin in the neck with the cure.
Goblin SCREAMS! Peter GASPS! May staggers back, as Goblin
pulls the cure device from his neck and throws it to the
ground.
GREEN GOBLIN (CONT'D)
It didn’t work! Norman was right.
He got it from you. That pathetic--
Goblin lands his foot on Peter’s back, slamming his head into
fallen debris.
GREEN GOBLIN (CONT'D)
--sickness!
May grabs a metal rod from the wreckage, as Goblin grabs
Peter, pulling his head back to whisper in his ear:
GREEN GOBLIN (CONT'D)
You tried to fix me--
PETER
May, go--
But May won’t leave Peter.
GREEN GOBLIN
Now... I’m gonna fix you.
The WHIR of an engine as...
EXT. HAPPY’S CONDO BUILDING - PLAZA - SAME TIME (NIGHT)
GREEN GOBLIN’S GLIDER hovers just outside.
INT. HAPPY’S CONDO - LOBBY - SAME TIME (NIGHT)
Peter calls out to May, pleading--
111.
112.
PETER
May, run, please...
May clenches the metal rod, psyching herself up when--
CRASH! Green Goblin’s glider EXPLODES through the glass
doors of the lobby... AND CUTS MAY DOWN!
Goblin leaps on top of the glider.
GREEN GOBLIN
Peter, Peter, Peter... no good deed
goes unpunished. You can thank me
later.
Goblin glances at May -- on the ground, but still moving. As
Peter realizes what Goblin means...
CLOSE ON Goblin releasing a live pumpkin bomb. He tosses it
towards May...
Peter leaps to catch it... barely managing to knock the bomb
aside-- BOOM!
EXT. HAPPY’S CONDO BUILDING - PLAZA - CONTINUOUS (NIGHT)
Goblin rockets away on his glider. Pumpkin bombs BLOWING the
place to hell. When he’s done, the plaza is a fiery, smoky
wasteland.
INT. HAPPY'S CONDO - LOBBY - SAME TIME (NIGHT)
May gets up slowly. Groggy and covered in dust. Still
clutching the bag of cures.
Peter sits up, weakened. Clutching his side in pain.
PETER
May? May, May, I’m here.
May stumbles through the smoke. Finds Peter and hugs him
tightly.
PETER (CONT'D)
May! Yeah, I’m here. Are you
okay?
MAY
Uh huh. Uh huh...
She stumbles back. Peter catches her.
112.
113.
PETER
May... it’s okay. We’re okay,
right?
MAY
Yeah, got knocked on my ass.
PETER
Yeah, me too.
MAY
That’s all.
PETER
I think I broke my ribs.
He clutches his side, wincing. A beat as they catch their
breaths, take in all the destruction...
PETER (CONT'D)
This is all my fault, May.
MAY
No.
PETER
I should’ve just listened to
Strange and let him send them back.
MAY
You did the right thing. They
would have been killed. You did
the right thing.
PETER
But it’s not my responsibility,
May.
MAY
Oh. What Norman said? “My moral
mission?” No.
PETER
No, you--
MAY
No, no, Peter, you listen-- You
listen to me!
May rests her hand on Peter’s chest.
113.
114.
MAY (CONT'D)
You have a gift. You have power,
and with great power, there must
also come great responsibility.
Hmm?
PETER
...Yeah, I know.
MAY
Let’s get the... out of here.
PETER
Okay, let’s go.
MAY
Let me just... catch my...
May notices something on her hands -- BLOOD. She drops to
the ground.
EXT. HAPPY’S CONDO BUILDING - PLAZA - SAME TIME (NIGHT)
LIGHTS. NOISE. DoDC SWAT TEAMS BURST out the back of their
trucks. Weapons trained on the shattered building’s lobby.
INT. HAPPY'S CONDO - LOBBY - SAME TIME (NIGHT)
Peter leans over a fallen May.
PETER
What happened? Are you okay?
MAY
I’m okay.
PETER
Yeah, you’re okay. What happened?
MAY
...Just have to... just catch my
breath.
PETER
Okay, well catch your breath. I’m
right here. We’re gonna take our
time, you catch your breath, and
then we’ll take you to a doctor,
okay?
Peter looks at May’s side, holds up his hand -- it’s covered
in her blood. His face falls.
114.
115.
MAY
Are you okay?
Peter calls out, frantic:
PETER
Somebody help! I need an
ambulance, please! Somebody!
MAY
What happened?
Peter turns back to May, holds her face in his hands.
PETER
Nothing happened. You’re okay.
You’re okay...
MAY
I just... need to catch my
breath...
PETER
I’m right here. I’m right here...
we’re okay. Just me and you.
May’s breaths slow. Her eyes glaze over. She falls still.
PETER (CONT'D)
May? ...May? Will you look at me,
May? Please?
(gently shakes her)
May? ...May? What are you doing,
May? Please, will you just wake up
and talk to me? Please?
EXT. HAPPY’S CONDO BUILDING - PLAZA - SAME TIME (NIGHT)
SCREECH! A car screams to a halt in front of the lobby, in
between Peter and the incoming DoDC guys.
Reveal Happy in the driver’s seat. He turns, spots Peter and
a fallen May.
INT. HAPPY'S CONDO - LOBBY - INTERCUT - SAME TIME (NIGHT)
Inside the lobby, Peter looks up--
Spots Happy in his car. They lock eyes. Instantly, Happy
knows. His heart breaking.
Happy turns to face the DoDC, lifting his hands into the air.
115.
116.
DODC SWAT OFFICER
Get out of the car now! Move!
Happy is pulled from his vehicle. Slammed onto the hood.
HAPPY
Peter! Run!
Trembling with grief, Peter whispers to May:
PETER
It’s just me and you, okay? It’s
just me and you.
He kisses her forehead.
PETER (CONT'D)
Oh May, I’m sorry. I’m so sorry.
I’m so so so sorry.
DODC SWAT OFFICER (O.S.)
All right, Parker. Come out with
your hands up! Come out right now,
or we will open fire.
HAPPY
RUN!
The DoDC SWAT TEAM FIRES at Peter. He’s HIT, flung back from
May...
DODC SWAT OFFICER (O.S.)
All right, let’s go, let’s go!
Move in!
Happy looks on in quiet horror as he’s led away in cuffs.
DoDC agents begin infiltrating the lobby...
But Peter’s already gone.
HOLD ON May, lying amid the rubble, as a single tear falls
down her cheek.
EXT. TIMES SQUARE - LATER (NIGHT)
OVER BLACK:
J. JONAH JAMESON (V.O.)
Tragedy.
ANGLE ON the bag of broken cures on the ground, pelted by
heavy rainfall.
116.
117.
J. JONAH JAMESON (V.O.)
What else can I call it? What more
need be said?
PULL BACK TO REVEAL Peter on a rooftop, watching the news
play on a GIANT SCREEN in Times Square. Devastated.
J. JONAH JAMESON (ON SCREEN)
The damage, the destruction, you
saw it with your own eyes. When
will people wake up and realize
that everywhere Spider-Man goes,
chaos and calamity ensue.
Everything Spider-Man touches comes
to ruin. And we, the innocents,
are left to pick up the pieces.
(then)
J. Jonah Jameson reporting. Good
night... and God help us all.
INT. NED’S LOLA’S HOUSE - NIGHT
A quaint home adorned with family photos and tchotchkes. Ned
and MJ sit at the kitchen table, worried.
Ned’s LOLA drops off a plate of YEMA ROLLS and gives her
grandson a hug.
INT. NED’S LOLA’S HOUSE - LATER (NIGHT)
Lola is now gone. MJ watches the local news on the living
room TV while checking her phone for any updates from Peter.
LOCAL NEWS REPORTER (ON TV)
We are told that multiple people
have been injured. And we can
confirm at least one person has
been killed. There is a manhunt
across the city for these suspects,
and they are also looking for Peter
Parker...
MJ turns to Ned:
MJ
Still nothing?
Ned checks his phone. (He wears Dr. Strange’s SLING RING.)
NED
(shakes head)
No.
117.
118.
MJ sighs, sits at the kitchen table. A beat as she looks at
The Box in front of them.
MJ
(re: button)
I’m gonna press it.
NED
But, what? No--
MJ
I know he told me to wait, but--
I’m gonna do it.
NED
I just wish-- I just wish we could
see him.
Ned’s gesticulating (with the Sling Ring on his hand) causes
SMALL SPARKS to appear!
MJ
...Ned?
NED
Yeah?
MJ
Do that again.
NED
Yeah.
Ned gesticulates, larger this time.
NED (CONT'D)
I just wish we could see him.
More SPARKS... a SMALL PORTAL OPENS... THEN CLOSES!
Ned and MJ stand, alert.
NED (CONT'D)
Okay...
Ned psyches himself up, tries again. Even more forceful:
NED (CONT'D)
I just wish we could see Peter!
The PORTAL WIDENS! On the other side, a DARK FIGURE in an
alley. ...Peter?!
Lola peeks around the corner and GASPS.
118.
119.
NED (CONT'D)
(re: Sling Ring)
Whoa...
LOLA
(to Ned, in Tagalog:
“Magician!”)
Salamangkero!
NED
Lola, you’re right! I am magic.
MJ squints into the portal.
MJ
Is that him?
NED
Yeah, yeah, it has to be.
Ned and MJ start calling out:
MJ
Peter... Peter!
NED
Hey, Peter! Peter!
The Dark Figure hears them, runs for the portal, and--
--JUMPS THROUGH, INTO THE ROOM, TO REVEAL IT’S SPIDER-MAN!
But he’s wearing a different suit...
MJ/NED
Whoa!
Lola SCREAMS!
WEBB-VERSE SPIDER-MAN
(waves)
Hi... hi!
Lola throws a pillow at Spider-Man, then hides.
WEBB-VERSE SPIDER-MAN (CONT'D)
No, no, no... it’s okay, it’s okay,
it’s okay. I’m a nice guy.
Spider-Man pulls his mask off to reveal -- PETER PARKER
(Andrew Garfield) from THE WEBB-VERSE!
WEBB-VERSE PETER
Okay...
119.
120.
MJ
Who the hell are you?
WEBB-VERSE PETER
I’m Peter Parker.
MJ
That’s not possible.
WEBB-VERSE PETER
I am Spider-Man... in my world.
But then yesterday, I was--
(can’t explain it)
I was just here.
Lola peeks around the corner, as Webb-Verse Peter turns and
studies the portal, geeking out.
WEBB-VERSE PETER (CONT'D)
Wow... string theory,
multidimensional reality, and
matter displacement...
(to Ned and MJ)
All real?
MJ/NED
(reluctantly)
Yeah...
Ned speaks aside to MJ:
NED
This has to be because of the
spell.
WEBB-VERSE PETER
“The spell?” Like magic spell?
NED
No, no... there’s no spell.
MJ
No spell.
NED
No.
WEBB-VERSE PETER
Magic’s real here too?
NED
I mean--
MJ whispers aside to Ned:
120.
121.
MJ
Shut up, Ned.
NED
No, it’s not real.
MJ
Shut up...
NED
I mean, there’s magicians and
stuff. But there’s no, like--
MJ
Stop talking... stop. Stop!
MJ turns to Webb-Verse Peter.
MJ (CONT'D)
Prove it.
WEBB-VERSE PETER
Prove what?
MJ
That you’re Peter Parker.
WEBB-VERSE PETER
I don’t carry an I.D. with me. You
know, it kind of defeats the whole
“anonymous superhero” thing.
MJ throws a yema roll at him. She takes a defensive stance.
WEBB-VERSE PETER (CONT'D)
...Why’d you do that?
MJ
I was trying to see if you have the
tingle thing.
WEBB-VERSE PETER
I have the tingle thing, just not
for bread.
As she picks up another yema roll--
WEBB-VERSE PETER (CONT'D)
Can you not throw the bread again?
You’re a deeply mistrusting
person... and I respect it.
He JUMPS up and sticks one hand on the ceiling. Hanging
there, feet off of the ground.
121.
122.
MJ
(not impressed)
Crawl around.
WEBB-VERSE PETER
“Crawl around”?
MJ
Yes.
WEBB-VERSE PETER
Umm, no.
MJ
Yes. Crawl around.
WEBB-VERSE PETER
Why do I need to crawl around?
MJ
‘Cause this is not enough.
WEBB-VERSE PETER
This is plenty.
MJ
No, it’s not.
WEBB-VERSE PETER
Yes, it is.
MJ
No, it’s not.
WEBB-VERSE PETER
It is.
MJ
Nuh-uh.
WEBB-VERSE PETER
How do I stick to the ceiling?!
MJ throws another yema roll at him.
MJ
Do it.
She reloads with another. Webb-Verse Peter shakes his head
and sighs, still hanging from the ceiling by one hand.
LOLA (O.S.)
Ned?
122.
123.
Lola now stands in the room, speaking Tagalog. She points to
Webb-Verse Peter. Ned translates for him:
NED
My Lola is asking if you could just
get the cobweb...
(points)
There. Since you’re, like, up
there?
WEBB-VERSE PETER
Yeah.
Webb-Verse Peter crawls over and grabs the cobweb--
LOLA
Thank you.
--Then drops back to the ground. Dusts himself off.
WEBB-VERSE PETER
We good?
MJ
For now.
The PORTAL CLOSES behind Webb-Verse Peter. He stands there,
shrugging like -- what now?
Ned turns to MJ:
NED
So, I opened the wrong portal to
the wrong Peter Parker.
MJ
Yeah. I guess you just keeping
doing it until we find the real
one.
WEBB-VERSE PETER
Ouch.
MJ
No offense.
NED
Okay...
MJ
Okay, you got it.
Ned tries again -- swinging his hand in wide circles, as--
123.
124.
NED
Find Peter Parker.
WEBB-VERSE PETER
What’s the thing on his hand?
MJ SHUSHES him. Ned continues to gesticulate.
NED
Find Peter Parker. Find Peter
Parker!
Suddenly, a PORTAL OPENS BEHIND THEM. On the other side
stands a FIGURE IN SILHOUETTE.
The Figure steps through the portal to reveal PETER PARKER
(Tobey Maguire) from THE RAIMI-VERSE! In civilian clothes.
NED (CONT'D)
Great, it’s just some random guy.
RAIMI-VERSE PETER
(little wave)
Hello. Um, I hope it’s okay, I
just came through this, uh--
The PORTAL CLOSES behind him.
RAIMI-VERSE PETER (CONT'D)
Oh. It just closed.
MJ
You’re Peter?
RAIMI-VERSE PETER
Yeah. Peter Parker. I... I’ve
seen you two--
He spots Lola. She blushes and waves. He kindly waves back:
RAIMI-VERSE PETER (CONT'D)
Hi.
Then he pauses, notices Webb-Verse Peter across the room.
They eye each other. Both sensing something. Two
gunslingers sizing the other up...
RAIMI-VERSE PETER (CONT'D)
(re: Webb-Verse Peter)
Wait, he’s-- He’s not your friend.
Then, THWIP! THWIP! Webb-Verse Peter FIRES A WEB at RaimiVerse Peter, who dodges it with super-human speed and...
FIRES A WEB BACK. Webb-Verse Peter dodges, equally fast.
124.
125.
They both flip mid-air and land.
Raimi-Verse Peter QUICKLY WEBS Webb-Verse Peter’s web
slinger. Webb-Verse Peter nods, impressed.
NED
(to Raimi-Verse Peter)
Wait, so you’re Spider-Man too.
Why didn’t you just say that?
RAIMI-VERSE PETER
I generally don’t go around
advertising it. Kind of defeats
the whole “anonymous superhero”
thing.
WEBB-VERSE PETER
(sotto)
I just said that.
MJ
(sotto, re: Webb-Verse
Peter)
It’s what he just said.
Lola points about the room, giving a long, passionate speech
in Tagalog. The Peters patiently wait for her to finish so
that Ned can translate.
NED
My Lola is asking if you could
clean up the webs you just shot?
WEBB-VERSE PETER
Oh, sorry, Lola.
RAIMI-VERSE PETER
Yes, of course.
LOLA
I’m going to bed.
As she walks off...
NED
Night, Lola.
MJ
Good night, Ned’s Lola.
Webb-Verse Peter starts cleaning up the kitchen, as RaimiVerse Peter approaches MJ and Ned.
125.
126.
RAIMI-VERSE PETER
Uh, this might seem kinda weird,
but... I’ve been trying to find
your friend ever since I got here.
I just have this sense that... that
he needs my help.
WEBB-VERSE PETER
Our help.
Raimi-Verse Peter nods in agreement.
MJ
...He does.
NED
We don’t know where he is.
MJ
And um... honestly, right now,
we’re all he really has left.
RAIMI-VERSE PETER
Well, uh, is there some place that
he might go that has meaning to
him? Like a place where he would
go to just--
WEBB-VERSE PETER
Get away from everything?
A glance of acknowledgment between the two.
RAIMI-VERSE PETER
For me, it was the top of the
Chrysler building.
WEBB-VERSE PETER
Empire State. It’s just... it’s a
better view.
RAIMI-VERSE PETER
That is a sweet view.
MJ
(realizing)
Yes. Yeah. I... I think I know
exactly where that would be.
EXT. MIDTOWN ROOFTOP - LATER (NIGHT)
Peter sits alone. The bag of destroyed cures next to him.
126.
127.
Suddenly, Ned and MJ appear and wrap him in a hug. Peter
collapses into them and sobs.
MJ
...I’m sorry.
MJ gently pulls back--
MJ (CONT'D)
Peter, there’s... there’s some
people here.
PETER
What?
Peter leaps up, sensing them...
Raimi-Verse and Webb-Verse Peter stare down from the school’s
tower, silhouetted by the moon.
Peter takes a protective stance, guarding his friends, as
Raimi-Verse Peter and Webb-Verse Peter swing down.
PETER (CONT'D)
Hey, wait, wait-- whoa!
The other Peters’ faces say it all. Yes, we’re... you.
RAIMI-VERSE PETER
Sorry... about May.
WEBB-VERSE PETER
Yeah, sorry. I’ve got some
understanding of what it--
PETER
No, no, no... please don’t tell me
that you know what I’m going
through.
WEBB-VERSE PETER
(nods)
Okay.
PETER
She’s gone. And it’s all my fault.
She died for nothing.
(then)
So I’m gonna do what I should have
done in the first place.
Peter reaches for The Box in MJ’s hand.
127.
128.
RAIMI-VERSE PETER
Peter--
PETER
Please, don’t! You don’t belong
here, either of you. So I’m
sending you home. Those other guys
are from your worlds, right?
Webb-Verse Peter nods.
PETER (CONT'D)
So you deal with it. And if they
die, if you kill them... that’s on
you. It’s not my problem. I don’t
care anymore. I’m done.
(then, sincerely)
I’m really sorry that I dragged you
into this. But you have to go home
now. Good luck.
Peter reaches for The Box again, but MJ gently pulls it back.
She looks at Peter -- just hear them out.
RAIMI-VERSE PETER
My uncle Ben was killed. It was my
fault.
WEBB-VERSE PETER
I lost...
(voice catching)
I lost Gwen. My, um... she was my
MJ. I couldn’t save her. I’m
never gonna be able to forgive
myself for that. But I carried on,
tried to, um... try to keep going,
try to keep being the uh... that
“Friendly Neighborhood Spider-Man,”
‘cause I knew that’s what she would
have wanted. But at some point, I
just-- I stopped pulling my
punches. I got rageful. I got
bitter. I just don’t want you to
end up like... like me.
RAIMI-VERSE PETER
The night Ben died, I hunted down
the man who I thought did it. I
wanted him dead. I got what I
wanted. It didn’t make it better.
It took me a long time to learn to
get through that darkness.
128.
129.
Peter is reeling. Struck by their losses. Their regrets.
Their warning.
PETER
I want to kill him. I want to tear
him apart. I can still hear her
voice in my head. Even after she
was hurt, she said to me that we
did the right thing. She told me
that, “With great power--”
RAIMI-VERSE PETER
--”Comes great responsibility.”
The three of them look at each other. How do they know?
PETER
Wait, what? How do you know that?
WEBB-VERSE PETER
Uncle Ben said it.
RAIMI-VERSE PETER
The day he died.
The three Peter Parkers stare at each other, overwhelmed by
this uncanny connection. Bound together across universes by
those words.
RAIMI-VERSE PETER (CONT'D)
Maybe she didn’t die for nothing,
Peter.
EXT. MIDTOWN HIGH - ESTABLISHING SHOT - NIGHT
The school at night. Lights blink on in a classroom.
INT. MIDTOWN HIGH - CHEMISTRY LAB - SAME TIME (NIGHT)
The three Peters look over the broken cures. Ned and MJ
watch from nearby.
PETER
Okay so, uh... Connors, Marko,
Dillon, and um...
Peter hesitates. He sets aside the cure for Goblin.
PETER (CONT'D)
Uh, look, I think that I can repair
the devices for Dillon and Marko,
but the others--
129.
130.
WEBB-VERSE PETER
(a little cocky)
Oh, I got Connors. I’ve already
cured him once, so no big deal.
(off their looks)
What? It’s no big deal.
RAIMI-VERSE PETER
Great.
PETER
Yeah, that’s great.
RAIMI-VERSE PETER
I think I can make an anti-serum
for Dr. Osborn. Been thinking
about it a long time.
Raimi-Verse Peter notices Peter’s conflicted look.
RAIMI-VERSE PETER (CONT'D)
We gotta cure all of ‘em, right?
PETER
(playing it off)
Right.
RAIMI-VERSE PETER
That’s what we do.
Raimi-Verse Peter walks off. Peter notices MJ watching him.
PETER
What?
MJ
Just... three yous.
INT. MIDTOWN HIGH - CHEMISTRY LAB - LATER (NIGHT)
QUICK POPS:
-- A gloved hand grabs a metal water bottle.
-- SNAP! Another rubber glove is pulled onto a hand.
-- Plastic lab goggles are taken off their storage hooks.
-- WHOOSH! A bunsen burner ignites.
-- Several bottles of chemicals are pulled from their shelf.
130.
131.
Everyone is hard at work. Ned rolls over to Raimi-Verse
Peter.
NED
So, do you have a best friend too?
RAIMI-VERSE PETER
I did.
NED
You did?
RAIMI-VERSE PETER
He died in my arms, after he tried
to kill me.
(beat)
It was heartbreaking.
WEBB-VERSE PETER
(whispers to Ned)
Dude...
Ned looks concerned. Will he do that??
INT. MIDTOWN HIGH - CHEMISTRY LAB - MOMENTS LATER (NIGHT)
Peter works on one of the cures. He turns to Ned:
PETER
Will you uh... run a diagnostic?
NED
(quiet)
Yeah.
Ned refuses to make eye contact. He starts the diagnostic on
Peter’s laptop, then hurries off. What’s up with him?
MJ sidles up to Peter.
MJ
Hey, you okay?
PETER
Um, yeah, I’m fine. Are you okay?
She nods. Peter sighs.
PETER (CONT'D)
You don’t deserve this. I’ve
ruined your life--
131.
132.
MJ
Hey, no. No, no, no... no.
MJ holds his face in her hands. A pep talk, as much for her
as it is for him.
MJ (CONT'D)
Look at me. I’m here. I’m not
going anywhere. We’re gonna get
through this, and we’re going to
get through it together. Okay?
PETER
(nods)
Okay.
MJ
‘Kay.
MJ leans her head against his. Peter relaxes into her.
PETER
Thank you.
ON WEBB-VERSE PETER, watching them with a tinge of longing.
The kind of love he had... and lost.
RAIMI-VERSE PETER
You have someone?
Raimi-Verse Peter has noticed him watching Peter and MJ.
WEBB-VERSE PETER
No. I got no time for uh, Peter
Parker stuff, you know?
(then)
Do you?
RAIMI-VERSE PETER
Uh, that’s a little complicated.
WEBB-VERSE PETER
No, I understand. I guess it’s
just not in the cards for guys like
us.
RAIMI-VERSE PETER
Well, I wouldn’t give up. It took
a while, but... we made it work.
WEBB-VERSE PETER
Yeah?
132.
133.
RAIMI-VERSE PETER
Yeah. Me and... MJ.
Webb-Verse Peter reacts -- MJ?
RAIMI-VERSE PETER (CONT'D)
My MJ. It, uh... it gets confusing
here.
WEBB-VERSE PETER
(laughs)
Yeah.
NED
Peter!
All three turn at once.
PETER/RAIMI-VERSE PETER/WEBB-VERSE
PETER
Yeah? Oh, sorry. Did you mean--
All three point at each other: Him? Memes!
NED
Peter, Peter--
PETER/RAIMI-VERSE PETER/WEBB-VERSE
PETER
We’re all called Peter--
NED
Peter Parker?
PETER/RAIMI-VERSE PETER/WEBB-VERSE
PETER
Same again--
WEBB-VERSE PETER
We’re all Peter Parker.
NED
(giving up)
It’s uh... the computer!
PETER
Oh!
Peter moves to his laptop, spots the diagnostic results.
PETER (CONT'D)
Oh, I’m ready.
133.
134.
WEBB-VERSE PETER
Yeah. Me too. Okay, so now all we
gotta do is lure these guys some
place, right? Try to cure them
while they try to kill us, and then
send them home.
RAIMI-VERSE PETER
Using a magic box.
A look between them. This is crazy, but we’re doing it.
PETER
Well, that’s the plan.
WEBB-VERSE PETER
(to Raimi-Verse Peter)
So, wait, are you gonna go into
battle dressed as a cool youth
pastor, or... do you got your suit?
Raimi-Verse Peter lowers his T-shirt collar to reveal he’s
wearing his Spider-Man suit underneath.
WEBB-VERSE PETER (CONT'D)
Good.
Ned slides over CARTRIDGES OF WEB FLUID to Peter.
NED
Here are your web cartridges.
PETER
Oh thanks, man.
RAIMI-VERSE PETER
What’s that for?
PETER
Uh, it’s my web fluid, it’s for my
web shooters. Why?
Raimi-Verse Peter raises his hand and FIRES A WEB FROM HIS
BARE WRIST! The others all react in shock/disgust.
PETER/WEBB-VERSE PETER
Whoa...!
NED
That came out of you!
134.
135.
RAIMI-VERSE PETER
Yeah.
(to Peter)
You can’t do that, huh?
PETER
No!
WEBB-VERSE PETER
(amazed)
How on earth does that even...?
PETER
Anyway, we’re getting sidetracked.
(re: laptop)
Look, this is where we’re gonna do
this, okay? It’s isolated, so no
one should get hurt.
He turns his laptop around, shows it to the other Peters.
PETER (CONT'D)
We draw them there with The Box.
It’s the one thing they all want.
All we have to do is figure out how
we’re going to get there.
NED
Oh, we could portal there.
PETER
What?
NED
(proud)
I’m magic now!
MJ
Yeah, no, no, he’s right. Yeah, he
can.
The other Peters nod.
RAIMI-VERSE PETER
Yeah, we saw it.
WEBB-VERSE PETER
Yeah, he is.
PETER
(to Ned)
Wait, really?
NED
Dude, I got Dr. Strange-magic.
135.
136.
PETER
No way!
NED
Yeah!
(then, sincere)
And I promise you, I won’t turn
into a super villain and try to
kill you.
Webb-Verse Peter pats Ned on the back. Proud of him.
PETER
(reeling)
Okay... thank you?
(shaking it off)
Um, all right. Here goes nothing.
(to MJ)
What’s that thing you always say:
“Expect disappointment and--”
MJ
No, no, no. No... we’re gonna kick
some ass.
PETER
Okay.
RAIMI-VERSE PETER
Cure. Cure some ass.
NED
Cure that ass.
EXT. NEW YORK CITY - VARIOUS - LATER (NIGHT)
Over various establishing shots of New York City, J. Jonah
Jameson goes live:
J. JONAH JAMESON (V.O.)
Ladies and gentlemen, the Bugle tip
line has just received a call from
none other than the fugitive known
as Spider-Man! Fresh from his
rampage in Queens. So Peter
Parker. What pernicious propaganda
are you peddling?
PETER (V.O.)
Just the truth.
J. JONAH JAMESON (V.O.)
Oh sure...
136.
137.
ANGLE ON a TV in a restaurant window. Peter appears live on
The Daily Bugle, FaceTiming with J. Jonah Jameson.
PETER
The truth is... that this is all my
fault.
J. JONAH JAMESON (V.O.)
Hmm!
The broadcast plays across giant video billboards in Times
Square.
PETER
I accidentally brought those
dangerous people here.
NEWS BROADCAST: INT. DAILY BUGLE STUDIO - SAME TIME (NIGHT)
J. Jonah Jameson at his anchor desk.
J. JONAH JAMESON
Well, he admits it!
EXT. CONSTRUCTION SITE - INTERCUT - SAME TIME (NIGHT)
Peter stands amidst scaffolding and plastic sheeting. He
continues his FaceTime with J. Jonah.
PETER
And if those people are watching...
just know that I really did try to
help you. I mean, I could have
killed you--
Peter holds up THE BOX.
PETER (CONT'D)
--At any given moment. But I
didn’t. Because my Aunt May taught
me that everyone deserves a second
chance. And that’s why I’m here.
J. JONAH JAMESON
And where is “here” exactly?
PETER
A place that represents second
chances.
REVEAL he’s on top of... THE STATUE OF LIBERTY!
137.
138.
Mid-renovation. CONSTRUCTION SCAFFOLDING engulfs the statue.
Its oxidized copper now restored to a GOLDEN LUSTER. The
iconic torch concealed... by a GIGANTIC CAPTAIN AMERICA
SHIELD.
J. JONAH JAMESON (V.O.)
The Statue of Liberty?! Good God,
folks, he’s about to destroy
another national landmark!
PETER
But world, if you’re watching--
J. JONAH JAMESON (V.O.)
Believe me, the world is watching--
PETER
Wish me luck. Your friendly
neighborhood Spider-Man could
really use some.
With that, Peter hangs up.
EXT. STATUE OF LIBERTY - CROWN - LATER (NIGHT)
Peter leaps onto the crown of the Statue of Liberty, holding
the Box. He scans the horizon.
PETER
Okay guys, it could be any minute
now.
EXT. STATUE OF LIBERTY - SCAFFOLDING - SAME TIME (NIGHT)
Raimi-Verse Peter WEBS cures throughout the scaffolding,
keeping them hidden and safe.
RAIMI-VERSE PETER
Yep, almost done.
As he sets the final cure in place...
EXT. STATUE OF LIBERTY - SCAFFOLDING/CROWN - MOMENTS LATER
(NIGHT)
The calm before battle. Webb-Verse Peter and Raimi-Verse
Peter hang around on the scaffolding.
138.
139.
WEBB-VERSE PETER
You know Max was, like, the
sweetest guy ever... before he fell
into a pool of electric eels.
RAIMI-VERSE PETER
That’ll do it.
Raimi-Verse Peter’s back tenses up. He stretches.
RAIMI-VERSE PETER (CONT'D)
Ah, there it goes.
WEBB-VERSE PETER
You okay?
RAIMI-VERSE PETER
Oh, it’s my back. It’s kinda stiff
from all the swinging I guess.
WEBB-VERSE PETER
Oh yeah, no, I got a middle back
thing too.
RAIMI-VERSE PETER
Really?
WEBB-VERSE PETER
Yeah. You want me to crack it?
RAIMI-VERSE PETER
Yeah! Yeah, that’d be great.
WEBB-VERSE PETER
All right. You ready?
RAIMI-VERSE PETER
Yeah.
Raimi-Verse Peter crosses his arms as Webb-Verse Peter CRACKS
his back.
RAIMI-VERSE PETER (CONT'D)
Oh, that’s good.
Webb-Verse Peter sets Raimi-Verse Peter back down.
WEBB-VERSE PETER
How is it?
RAIMI-VERSE PETER
Wow... that’s good!
139.
140.
WEBB-VERSE PETER
(proudly)
Right?
RAIMI-VERSE PETER
That’s better.
WEBB-VERSE PETER
Yeah!
RAIMI-VERSE PETER
Wow.
Webb-Verse Peter sits down, taking in the moment.
WEBB-VERSE PETER
Ah, this is so cool. I always
wanted brothers.
(then, curious)
So you, like, make your own web
fluid in your body?!
RAIMI-VERSE PETER
(defensive)
I’d rather not talk about this.
WEBB-VERSE PETER
No! I don’t mean to--
RAIMI-VERSE PETER
But are you teasing me--?
From his lookout post at the crown, Peter chimes in:
PETER
No, no, no! No, no, no... he’s not
teasing you. It’s just that, we
can’t do that, so naturally we’re
curious as to how your web
situation works. That’s all.
WEBB-VERSE PETER
But if it’s personal, I don’t want
to, like, pry. But I just think
it’s cool.
RAIMI-VERSE PETER
No, I wish I could tell you, but
it’s like I don’t do it. Like I
don’t... like I don’t “do
breathing.” Like, breathing just
happens.
140.
141.
WEBB-VERSE PETER
(mind blown)
Whoa...
PETER
Like, does it just come out of your
wrists? Or... does it come out of
anywhere else?
RAIMI-VERSE PETER
Only... only the wrists.
WEBB-VERSE PETER
You’ve never had a web block?
‘Cause I run out of webs all the
time. I have to make my own in a
lab.
RAIMI-VERSE PETER
Right. That’s--
WEBB-VERSE PETER
And it’s a hassle compared to what
you got.
RAIMI-VERSE PETER
That sounds like a hassle. Yeah...
but I did actually, you said that,
I was like, “Oh! I had a web
block.”
WEBB-VERSE PETER
Whoa... why?
RAIMI-VERSE PETER
Existential crisis stuff.
WEBB-VERSE PETER
Yeah, I mean, like, don’t get me
started on that.
PETER
Hey, what are, like, some of the
craziest villains that you guys
have fought?
RAIMI-VERSE PETER
Seems you’ve met some of them.
WEBB-VERSE PETER
(laughs)
That’s a good question.
141.
142.
RAIMI-VERSE PETER
Yeah, I fought a... an alien made
out of black goo once.
PETER
Oh, no way! I fought an alien too.
On Earth and in space.
RAIMI-VERSE PETER
Oh!
PETER
Yeah, he was purple.
WEBB-VERSE PETER
I want to fight an alien!
RAIMI-VERSE PETER
(to Peter)
I’m, I’m-- I’m still, like... that
you’ve fought an alien in space.
WEBB-VERSE PETER
(sighs)
I’m lame. Compared-- Like, I
fought a Russian guy in, like, a
rhinoceros machine.
RAIMI-VERSE PETER
Can we wind it back to the “I’m
lame” part? ‘Cause you are not.
WEBB-VERSE PETER
Aw, thanks. No, yeah, I appreciate
it. I’m not saying, “I’m lame.”
I’m just saying, like--
RAIMI-VERSE PETER
But it’s just the self-talk maybe
we should, you know...
WEBB-VERSE PETER
(sighs)
Yeah, listen, uh...
RAIMI-VERSE PETER
‘Cause you’re... you’re amazing.
Just to take it in for a minute.
WEBB-VERSE PETER
Yeah, yeah, yeah, I can take it in.
No, I can take it in.
142.
143.
RAIMI-VERSE PETER
You... you are amazing.
WEBB-VERSE PETER
I can take it in.
RAIMI-VERSE PETER
(really grounding it)
You are amazing!
WEBB-VERSE PETER
Thank you. Yeah--
RAIMI-VERSE PETER
Will you say it?
WEBB-VERSE PETER
No, I kinda need to hear that.
Thank you.
ANGLE ON Peter at the crown. SPIDER-SENSES going off.
PETER
All right, guys, focus up. You
feel that?
RAIMI-VERSE PETER
Yeah.
The Peters stand their ground. A storm brews. Lightning
FLASHES...
ELECTRO (O.S.)
‘Sup, Pete?
Where’d that come from? ZAP! Electro bolts into view -- the
ARC REACTOR mounted on his chest.
ELECTRO (CONT'D)
How you like the new-new?
(re: The Box)
Look, you give it to me, I’m gonna
destroy it.
(laughs)
But I’ll let you live. Don’t make
me a murderer, Peter.
Peter pulls on his mask and swings off with The Box. He
calls out to the other Spider-Men over their comms:
SPIDER-MAN (OVER COMMS)
Okay, guys. Here he comes.
As Electro chases after...
143.
144.
ON THE SCAFFOLDING, Raimi-Verse Peter and Webb-Verse Peter
pull on their masks and swing into action.
Webb-Verse Spider-Man launches at Electro with the cure.
WEBB-VERSE SPIDER-MAN
Hey, Max! I missed you, man--
Whoa!
Webb-Verse Spider-Man WEBS out of the way, just before-- ZAP!
Electro barely misses him.
BACK ON SPIDER-MAN
SPIDER-MAN
All right, MJ! Heads up!
He reaches a PORTAL by the crown, tosses The Box through to--
INT. MIDTOWN HIGH - CHEMISTRY LAB - CONTINUOUS (NIGHT)
--MJ and Ned, at the ready. MJ catches The Box.
MJ
Got it!
(to Ned)
Close it.
Ned starts moving his arm in circles, like before. But...
THE PORTAL WON’T CLOSE!
MJ (CONT'D)
Uh... Ned, it’s not closing.
NED
Yeah, I know.
MJ
Why isn’t it closing?
NED
I don’t know, I--
MJ
Did you close it before?
NED
No, I mean, I’ve opened some...
144.
145.
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (NIGHT)
At the watery base of the statue... RAWR! Lizard LEAPS out
of the water.
EXT. STATUE OF LIBERTY - VARIOUS - SAME TIME (NIGHT)
Electro continues to shoot electric currents at Webb-Verse
Spider-Man, who dodges them. Drops down on the crown.
WEBB-VERSE SPIDER-MAN
Max! Max, Max... can we just talk for
a second? Just you and me, just--
ELECTRO
Look who showed up! My old friend,
Spider-Man.
WEBB-VERSE SPIDER-MAN
I’m trying to save you, Max.
That’s all I’ve ever wanted.
ELECTRO
You’re not trying to save me.
WEBB-VERSE SPIDER-MAN
I am.
ELECTRO
You ain’t even the shit no more.
Webb-Verse Spider-Man sighs, drops his head.
ELECTRO (CONT'D)
Don’t worry about me.
(re: arc reactor)
I saved myself. Burn up!
Electro ZAPS a bolt -- flames licking Webb-Verse Spider-Man’s
heels as he dives away.
WEBB-VERSE SPIDER-MAN (OVER COMMS)
Well, I got his attention. Now
what?
RAIMI-VERSE SPIDER-MAN (OVER COMMS)
Okay, great!
REVEAL Raimi-Verse swinging by... Lizard hanging off his leg!
RAIMI-VERSE SPIDER-MAN (OVER COMMS) (CONT'D)
Uh, just FYI -- Lizard guy’s here
too!
145.
146.
Raimi-Verse Spider-Man KICKS Lizard loose -- sending Lizard
SLAMMING onto the arm of a nearby crane.
Raimi-Verse Spider-Man drops down above him, quickly
backpedaling as Lizard advances.
RAIMI-VERSE SPIDER-MAN (OVER COMMS) (CONT'D)
Guys, comm check! Hello?!
ANGLE ON Spider-Man on the scaffolding, watching as--
Webb-Verse Spider-Man FLIPS and WEBS his way around Electro’s
pummeling bolts.
WEBB-VERSE SPIDER-MAN (OVER COMMS)
I need Max’s cure!
SPIDER-MAN (OVER COMMS)
Yeah! I’m on it!
Spider-Man looks to the crane -- Raimi-Verse Spider-Man
frantically crawls away from an approaching Lizard.
RAIMI-VERSE SPIDER-MAN (OVER COMMS)
Peter, I need the Lizard cure!
SPIDER-MAN (OVER COMMS)
Uh, okay, okay!
But before Spider-Man can help--
SLAM! Sandman’s MASSIVE FIST smashes into him... sending
Spider-Man over the ledge of the scaffolding... where Sandman
clutches him in mid-air.
SANDMAN
Where’s The Box, Peter?
PETER
Flint, we can help everyone!
SANDMAN
I don’t care!
Webb-Verse Spider-Man slingshots his way past them, Electro
in hot pursuit.
On the crane, Raimi-Verse Spider-Man battles Lizard. Just
as...
Spider-Man WEBS the crane, trying to pull himself out of
Sandman’s tightening grip...
An unsuspecting Webb-Verse Spider-Man swings through--
146.
(MORE)
147.
WHAM! He’s clotheslined by Spider-Man’s web, FLUNG
backwards, PLUMMETING... Webb-Verse Spider-Man WEBS a new
line--
--WHICH HITS RAIMI-VERSE SPIDER-MAN IN THE FACE! As he
struggles to see, Lizard SLAMS him into the crane.
WEBB-VERSE SPIDER-MAN (OVER COMMS)
Sorry!
Webb-Verse Spider-Man quickly WEBS a new line, as Raimi-Verse
Spider-Man rips the webbing from his mask.
RAIMI-VERSE SPIDER-MAN
Gross!
Webb-Verse Spider-Man lands onto the crane. Electro
approaches, calls out to Sandman:
ELECTRO
Sad to tell you, Sandman. Nobody’s
going home!
Electro blasts Webb-Verse Spider-Man... but hits the crane
instead -- CRACK! The crane comes CRASHING down...
Lizard and Raimi-Verse Spider-Man still battling onboard...
The crane SEVERS Sandman’s massive arm and head... which
falls away... freeing Spider-Man from Sandman’s grip.
ANGLE ON the falling crane... Raimi-Verse Spider-Man WEBS off
just before... Lizard rides it down... gets PINNED.
Electro continues after Webb-Verse Spider-Man... BLASTS him
into the scaffolding!
On Sandman, angered by the loss of his hand and head. Now
drawing sand from all over... creating a massive SANDSTORM.
Electro’s blinded by the whirling debris.
EXT. STATUE OF LIBERTY - SCAFFOLDING - SAME TIME (NIGHT)
On the scaffolding above the storm, Spider-Man rips off his
mask, catching his breath. Well, that didn’t go as planned.
Webb-Verse Peter and Raimi-Verse Peter quickly join him.
WEBB-VERSE PETER
What the hell is going on out
there?!
(to Raimi-Verse Peter)
(MORE)
147.
WEBB-VERSE PETER (CONT'D)
148.
I keep yelling at you, Peter-Two,
Peter-Two, Peter-Two--
RAIMI-VERSE PETER
I know, but I thought you were
Peter-Two.
WEBB-VERSE PETER
What?! I’m not Peter-Two!
PETER
Stop arguing! Both of you! Listen
to Peter-One. Look, we’re clearly
not very good at this!
WEBB-VERSE PETER
I know, I know, we suck. I-- I
don’t know how to work as a team.
RAIMI-VERSE PETER
Me neither.
PETER
Well, I do! I have been in a team,
okay? I don’t want to brag, but I
will... I was in The Avengers.
RAIMI-VERSE PETER
The Avengers?!
PETER
Yeah.
RAIMI-VERSE PETER
That’s great!
PETER
Thank you.
RAIMI-VERSE PETER
What is that?
PETER
(confused)
Wait. You don’t have The Avengers?
WEBB-VERSE PETER
Is that a band? Are you in a band?
PETER
No, I’m not in a band. No, The
Avengers is uh, uh... Earth’s
mightiest--
WEBB-VERSE PETER (CONT'D)
148.
149.
ZAP! A bolt of electricity amid the sandstorm.
RAIMI-VERSE PETER
How’s this helping?!
PETER
Look, it’s not important. All we
gotta do is focus, trust your
tingle, and coordinate our attacks,
okay?
RAIMI-VERSE PETER
(refocusing)
Yes, okay. Let’s pick one target.
PETER
Great.
WEBB-VERSE PETER
We take them off the board one at a
time.
PETER
Now you got it! Okay--
(points to self)
Peter-One.
(to Raimi-Verse Peter)
Peter-Two.
RAIMI-VERSE PETER
Peter-Two.
PETER
(to Webb-Verse Peter)
Peter-Three.
WEBB-VERSE PETER
Peter-Three!
PETER
All right. Let’s do this. Ready?
RAIMI-VERSE PETER
Let’s go--
As they begin to move off--
WEBB-VERSE PETER
Wait, wait, wait, wait, wait!
They all stop, turn back.
WEBB-VERSE PETER (CONT'D)
I love you guys.
149.
150.
Awkward, but they take that in.
PETER/RAIMI-VERSE PETER
Thank you.
PETER
All right, let’s do this.
RAIMI-VERSE PETER
Let’s go.
The three of them share a determined look. Three Peters,
united as one.
They pull on their masks and LEAP off the scaffolding--
EXT. STATUE OF LIBERTY - VARIOUS - CONTINUOUS (NIGHT)
THREE SPIDER-MEN SWINGING AS A TEAM! They land, one by one,
on the Statue of Liberty’s crown. Just as--
Sandman, Electro, and Lizard rise directly across from them.
THREE SPIDER-MEN VS. THREE VILLAINS!
Electro chases Spider-Man, swinging through the scaffolding.
SPIDER-MAN (OVER COMMS)
Okay, Spider-Mans, Sandman’s first.
Sandman, now gigantic, chases Raimi-Verse Spider-Man through
another part of the scaffolding.
RAIMI-VERSE SPIDER-MAN (OVER COMMS)
I’m gonna lead him inside the
statue.
Lizard chases Webb-Verse Spider-Man.
WEBB-VERSE SPIDER-MAN (OVER COMMS)
I’ll meet you at the top.
Webb-Verse Spider-Man grabs the SANDMAN CURE. Lizard
LEAPS... pins Webb-Verse Spider-Man down.
WEBB-VERSE SPIDER-MAN (CONT'D)
Hey, Doctor Connors...
LIZARD
Hello, Peter.
Just then, Spider-Man swings by, Electro trailing.
150.
151.
WEBB-VERSE SPIDER-MAN (OVER COMMS)
Peter-One!
Webb-Verse Spider-Man throws the cure...
SPIDER-MAN (OVER COMMS)
I got it!
CAUGHT! But Electro ZAPS... hitting Spider-Man... who drops
the Sandman cure onto the scaffolding below.
Elsewhere...
Raimi-Verse Spider-Man scrambles to evade Sandman, who is
closing in... Spider-Man crawls inside the Statue of Liberty,
climbing and webbing his way to the top...
RAIMI-VERSE SPIDER-MAN
Flint! We’re trying to help you!
But Sandman won’t give up the chase. Raimi-Verse Spider-Man
sighs... WEBS to the top of the Statue of Liberty...
He’s inside the crown -- there’s nowhere else to go! Sand
quickly flooding in all around him...
RAIMI-VERSE SPIDER-MAN (OVER COMMS) (CONT'D)
Guys, I’m at the top. I need the
cure!
Arms of sand grab at Raimi-Verse Spider-Man, pulling him
under...
Spider-Man rapidly climbs up the scaffolding.
SPIDER-MAN (OVER COMMS)
I’m coming, I’m coming, I’m coming!
But Webb-Verse Spider-Man is still pinned beneath Lizard...
holding back his GAPING JAWS. He HEADBUTTS him.
WEBB-VERSE SPIDER-MAN
Just wait--
KICKS Lizard back.
WEBB-VERSE SPIDER-MAN (CONT'D)
--Your--
WEBS Lizard to the scaffolding.
WEBB-VERSE SPIDER-MAN (CONT'D)
--Turn, Doc!
151.
152.
Lizard’s trapped. For now...
WEBB-VERSE SPIDER-MAN (CONT'D)
I’ll be right back.
Lizard ROARS in anger, as Webb-Verse Spider-Man runs off...
He grabs the fallen Sandman cure, jumps off the scaffolding,
and prepares to slingshot himself to the crown, when--
Electro appears, throws a BOLT--
Webb-Verse Spider-Man DODGES it just in time... FLINGING
himself to the top of the statue. He throws the cure...
Spider-Man catches it! He tosses the cure through the open
slots of the statue’s crown to...
Raimi-Verse Spider-Man, now completely engulfed in sand, save
for his grasping hand, which... GRABS the cure, clicks the
device on--
BOOM! A BLAST OF GOLDEN LIGHT!
The sand quickly retreats. Raimi-Verse Spider-Man pulls off
his mask, gasping for air...
He watches as the sand continues to fall away, to reveal...
FLINT MARKO. A man once again. It worked!
RAIMI-VERSE PETER
(amazed)
It’s okay, Flint. We’re gonna get
you home. Just... stay right here.
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (NIGHT)
FLASHES OF LIGHTNING! CRACKLING BOLTS! Electro grows with
power, amplified by the ARC REACTOR on his chest.
Raimi-Verse Spider-Man joins the other Spider-Men on top of
the crown.
RAIMI-VERSE SPIDER-MAN
How do we stop him?
WEBB-VERSE SPIDER-MAN
I’ve never seen him this powerful.
SPIDER-MAN
It’s the arc reactor, we gotta get
it off him.
152.
153.
Electro GLOWS brighter, shakes his head.
ELECTRO
You’re not gonna take this away
from me.
Spider-Man WEBS the arc reactor. Electro easily RIPS the web
away.
ELECTRO (CONT'D)
That’s not gonna work!
CRACK! Electro fires a huge BOLT of arc electricity at the
Spider-Men. They all jump, landing on the nearby
scaffolding.
SPIDER-MAN
Okay, we gotta do this up close.
Peter-Two, go right. Peter-Three,
go left. On me!
THWIP-TWHIP-THWIP! The three Spider-Men simultaneously fire
webs, attempting to secure Electro.
Spider-Man goes in for the cure... but is BLASTED by
electricity!
Raimi-Verse Spider-Man jumps in... Electro effortlessly JOLTS
him... sending him tumbling off the scaffolding.
Webb-Verse Spider-Man leaps forward, cure in hand. He too is
SHOCKED by Electro... streams of electric currents holding
him in place. Off his screams--
A sneak-attack from behind! Spider-Man leaps, but Electro
deflects, SHOCKS Spider-Man straight into the Statue of
Liberty. Spider-Man FREE-FALLS--
EXT. STATUE OF LIBERTY - SCAFFOLDING - CONTINUOUS (NIGHT)
--Tumbling through construction netting, SLAMMING to a stop
on the scaffolding below.
Elsewhere...
Lizard BREAKS FREE from the webs. He stops, hears Ned and MJ
in the lab--
MJ (O.S.)
Um, I don’t really know how else to
tell you that it’s not closing.
153.
154.
NED (O.S.)
I’m trying to close it, MJ! Don’t
tell them that it’s not working!
INT. MIDTOWN HIGH - CHEMISTRY LAB - SAME TIME (NIGHT)
Ned struggles to close the portal. Deep breaths.
NED
Okay, wait, wait. Yeah... wait.
We’ll just keep going.
MJ
All right, no. It’s fine... you’re
gonna do it again. We’re just
gonna keep trying.
NED
All right, all right, we got it, we
got it... we got this!
MJ
(calming voice)
Focus. Close the portal... close
the portal...
EXT. STATUE OF LIBERTY - SCAFFOLDING - INTERCUT - SAME (NIGHT)
Spider-Man spots Lizard CHARGING at the portal!
SPIDER-MAN
Oh no. No, no, no!
WHOOSH! Spider-Man SWINGS to the portal...
IN THE LAB, as Ned and MJ panic--
MJ
And that is a lizard!
NED
No, no, it’s a big lizard!
They take off running as Lizard LEAPS through the portal,
CRASHING through the chairs and lab tables.
Spider-Man swings into the portal, KICKS Lizard back--
SPIDER-MAN
Run!
154.
155.
Ned and MJ run for their lives. They have no choice but to
head through the open portal onto--
THE STATUE OF LIBERTY SCAFFOLDING!
Lizard nearly has them... but Spider-Man pulls him back--
SPIDER-MAN (CONT'D)
Connors, stop!
Spider-Man and Lizard battle it out... tumbling through the
portal, back onto the Statue of Liberty scaffolding...
Lizard SLAMS Spider-Man down, races after Ned and MJ.
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (NIGHT)
On Webb-Verse Spider-Man, still pinned in place by Electro’s
surging power. As Electro laughs, Webb-Verse Spider-Man
loses his grip on the Electro cure device -- it hits the
scaffolding below--
--Where Raimi-Verse Spider-Man WEBS it! Readies for attack.
When suddenly--
CLUNK! A tentacle arm GRABS him, swings him back. RaimiVerse Spider-Man drops the cure, as--
CLUNK! Another tentacle arm GRABS Webb-Verse Spider-Man...
Electro’s bolts still JOLTING through him.
CLOSE ON Doc Ock, rising into view behind Electro.
DOC OCK
Leave ‘em. They’re mine.
ELECTRO
I don’t need your help. I’ve got
it just fine.
RAIMI-VERSE SPIDER-MAN
(recognizing)
Dr. Octavius, no...
Off Doc Ock’s grin...
CLUNK! Electro looks down -- a third tentacle claw has
LATCHED ONTO THE ARC REACTOR on his chest! It was a ruse to
draw him closer, and it worked.
ELECTRO
What are you doing?!
155.
156.
Ock turns to face Electro...
ELECTRO (CONT'D)
Get it off of me!
Doc Ock releases the Spider-Men to the scaffolding below...
retrieves the fallen cure...
On Electro as Doc Ock YANKS the arc reactor off him with one
tentacle, and with another, SETS the ELECTRO CURE DEVICE in
place!
A BLAST OF DISSIPATING ELECTRIC CURRENTS!
DOC OCK
There you go.
Electro no more. Now MAX DILLON. Cured.
EXT. STATUE OF LIBERTY - SCAFFOLDING - SAME TIME (NIGHT)
On Ned and MJ, running for their lives from Lizard. Ned
desperately tries to open a portal to some place else. Any
place else.
Lizard jumps at them--
Ned manages to OPEN A PORTAL! To the bottom of New York Bay!
WATER floods through... knocking Lizard back.
MJ grabs the Lizard cure device...
Lizard skids to a stop, water and broken scaffolding falling
about him.
Spider-Man swings down to meet him, KICKS Lizard back--
SPIDER-MAN
MJ!
MJ throws Spider-Man the Lizard cure...
RAWR! Lizard LEAPS forward... Spider-Man grabs the cure and
SHOVES it into Lizard’s gaping jaws.
HISS! The gas is released. Lizard staggers backward,
beginning to transform.
NED
Whoa!
Ned and MJ watch, amazed. Then MJ grabs The Box from Ned.
156.
157.
MJ
We gotta hide this thing!
NED
Oh, right... right, right--
Ned quickly opens a PORTAL... a warm desert breeze blows in,
as out of the Mirror Dimension steps--
DR. STRANGE. Glaring at Ned and MJ. Not happy.
DR. STRANGE
Where is he?
Strange magics The Box out of MJ’s hands.
NED
No!
MJ
Wait, wait, wait--
NED (CONT'D)
Before you do anything Mister-- Dr.
Strange, sir, uh... Peter’s plan is
working!
DR. STRANGE
What plan?
NED
He’s curing them!
Dr. Strange walks forward to see...
Lizard transforming back into Dr. Curt Connors, Spider-Man at
his side.
SPIDER-MAN
Doctor Connors?
(then)
Welcome back, sir.
Strange reacts, surprised.
DR. STRANGE
Well, I’ll be damned.
He turns to Ned.
DR. STRANGE (CONT'D)
Did you just open a portal?
NED
Yes-- Yes, sir. I did.
157.
158.
DR. STRANGE
(quietly impressed)
Hmm.
He walks off. Ned looks to MJ, in shock. Did Dr. Strange
just give him an approving nod?!
EXT. STATUE OF LIBERTY - UPPER SCAFFOLDING - SAME (NIGHT)
One of Doc Ock’s tentacles gently drops Max Dillon onto the
scaffolding. Webb-Verse Peter drops down beside him.
WEBB-VERSE PETER
(cautious)
Max? Max...
MAX DILLON
Don’t worry. I’m all tapped out.
WEBB-VERSE PETER
Are you sure about that?
Max sighs, leans against a railing.
MAX DILLON
Back to being a nobody.
WEBB-VERSE PETER
You were never a nobody, Max.
MAX DILLON
Oh yes I was. Yes I was. You
didn’t see me.
(laughs, then)
Can I tell you something though?
WEBB-VERSE PETER
Yeah.
MAX DILLON
You gotta nice face. You just a
kid.
WEBB-VERSE PETER
Eh...
MAX DILLON
You from Queens. You got that
suit. You help a lot of poor
people. I just thought you was
gonna be Black.
158.
159.
WEBB-VERSE PETER
Oh man, I’m sorry.
MAX DILLON
No, no, don’t apologize. There’s
gotta be a Black Spider-Man
somewhere out there.
Webb-Verse Peter nods. There probably is.
MAX DILLON (CONT'D)
Goddamn eels...
As Webb-Verse Peter helps Dillon to his feet...
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (NIGHT)
Doc Ock examines the arc reactor in his hand.
DOC OCK
The power of the sun...
RAIMI-VERSE SPIDER-MAN
In the palm of your hand.
Doc Ock turns to see--
DOC OCK
Peter?
Raimi-Verse Spider-Man pulls off his mask. A reunion.
RAIMI-VERSE PETER
Otto.
DOC OCK
Oh, it’s good to see you, dear boy.
RAIMI-VERSE PETER
It’s good to see you.
DOC OCK
You’re all grown up.
(then, laughs)
How are you?
RAIMI-VERSE PETER
Trying to do better.
They share a smile. Then a NOISE directs them towards--
159.
160.
Dr. Strange emerges from a PORTAL near the crown, carrying
The Box. Spider-Man drops down in front of him, takes off
his mask.
PETER
Strange, wait, we’re so close--
DR. STRANGE
Skip it! I’ve been dangling over
the Grand Canyon for twelve hours!
Dr. Strange stops when he notices... RAIMI-VERSE PETER.
PETER
I know. I know, I know, I, uh...
um, ah...
Webb-Verse Peter falls in -- all three Spider-Men in a row.
Dr. Strange’s jaw drops.
PETER (CONT'D)
I’m sorry about that, sir. I
mean...
A confused Raimi-Verse Peter steps in, looks to Dr. Strange.
RAIMI-VERSE PETER
You went to the Grand Canyon?
WEBB-VERSE PETER
He coulda used your help, man.
Dr. Strange rolls his eyes, shakes his head.
PETER
No, no, no, it’s okay! It’s okay!
Uh, these... these are my new
friends.
(re: Raimi-Verse Peter)
This is Peter Parker.
(re: Webb-Verse Peter)
This is Peter Parker. Spider-Man.
Spider-Man. They’re mes from...
other universes. They’re here to
help.
This is all too much for Dr. Strange.
DR. STRANGE
No, no...
Peter turns to the other Peters:
160.
161.
PETER
This is the wizard that I was
telling you about.
DR. STRANGE
Look, I am really impressed that
you’ve managed to give them all a
second chance, kid. But this has
to end. Now.
GREEN GOBLIN (O.S.)
Can the Spider-Man come out to
play?!
Raimi-Verse Peter turns towards that oh so familiar voice,
his eyes WIDENING when he sees--
GREEN GOBLIN on his glider, silhouetted by the moon. He
rockets down, lobbing volley after volley of PUMPKIN BOMBS!
Doc Ock deftly springs into action -- GRABBING BOMBS out of
Dr. Strange’s path -- while the Peters quickly DODGE several
EXPLOSIONS.
In the chaos, Goblin swoops down and--
STEALS THE BOX from Dr. Strange!
Peter turns to see--
THUNK! One of Doc Ock’s tentacles grabs onto the glider,
holding Goblin in place, as--
Dr. Strange uses an Eldritch Whip to TAKE BACK THE BOX!
Furious, Goblin twists -- his glider SLICING through Ock’s
tentacle arm! AGH! Ock shudders in pain, as Goblin jets
off.
ANGLE ON Strange manipulating The Box with magic...
Suddenly, all three Peters sense it... something off about
The Box... something inside. A PUMPKIN BOMB!
PETER
Strange, no--!
BOOM! The bomb detonates... THE BOX EXPLODES!
Fragments of debris hurled in every direction... followed by
the swirling, spinning magic of...
THE BROKEN SPELL, unleashed and unstable!
161.
162.
It RIPPLES through the Captain America shield, which BREAKS
OFF--
EXT. STATUE OF LIBERTY - SCAFFOLDING - CONTINUOUS (NIGHT)
--HURTLING through level after level of scaffolding... a
crumbling avalanche of twisted metal.
A SCREAM! MJ falls backwards, tumbling off the collapsing
scaffolding.
Ned tries to catch her, but LOSES HIS OWN FOOTING! He barely
manages to grab a bent pole, dangling in mid-air...
ANGLE ON Peter, hearing MJ... he DIVES after her... reaching
out... almost there...
WHAM! Green Goblin (on his glider) SLAMS into him, carrying
Peter in the opposite direction!
MJ’s eyes go wide in horror as she plummets--
Webb-Verse Peter quickly reacts... swings down towards her--
EXT. STATUE OF LIBERTY - PEDESTAL - CONTINUOUS (NIGHT)
--AND CATCHES MJ, just in time!
MJ gasps for air, adrenaline surging.
WEBB-VERSE PETER
Are you okay?
MJ
Yeah. I’m okay.
(then, noticing)
Are you okay?
Overwhelmed with emotion, Webb-Verse Peter nods. Having just
relived the worst moment of his life when he lost Gwen Stacy
in THE AMAZING SPIDER-MAN 2. But this time, he prevailed.
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (NIGHT)
ON STRANGE
Floating above the crown, shaking with effort as he tries to
bring the errant spell under control...
162.
163.
EXT. STATUE OF LIBERTY - SAME TIME (NIGHT)
ON THE SHIELD
Barely held back by flimsy bars of scaffolding. DING! One
of the bars breaks. The shield SHUDDERS.
EXT. STATUE OF LIBERTY - SCAFFOLDING - SAME TIME (NIGHT)
ON NED
Hanging from the bent pole, straining to hold on.
EXT. STATUE OF LIBERTY - UPPER SCAFFOLDING - SAME (NIGHT)
ON MAX DILLON
As one of Doc Ock’s tentacles wraps around him, moving him
out of harm’s way.
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (NIGHT)
BACK ON STRANGE
Straining... the spell nearly contained, when--
A BLAST OF MAGIC! The spell erupts, billowing outwards.
DEEP, GLOWING CRACKS pierce through the night sky.
EXT. STATUE OF LIBERTY - SCAFFOLDING - SAME TIME (NIGHT)
AHH! Ned loses his grip on the bent pole... plummeting,
flailing in mid-air, when--
WHOOSH! He’s saved by THE CLOAK OF LEVITATION!
NED
Whoa!
EXT. STATUE OF LIBERTY - VARIOUS - SAME TIME (NIGHT)
CRACK! The shield finally gives, RIPPING through the
remaining scaffolding, SLAMMING onto the pedestal base, just
as--
Raimi-Verse Peter WEBS Dr. Connors, Doc Ock, and Max Dillon,
saving them from plunging to their deaths, as--
163.
164.
Cloak gently lowers Ned to the statue’s base... where the
shield ROLLS to a clattering stop at the water’s edge.
EXT. STATUE OF LIBERTY - TORCH - SAME TIME (NIGHT)
Atop Lady Liberty -- her TORCH no longer obscured. Dr.
Strange floats above it, looking all around...
NEW RIFTS and OPENINGS SPLIT their way through the skyline.
He quickly sets to work, combating the onslaught of the
Multiverse... SEALING one rift... then another...
Will he be able to hold back the tide?
EXT. GOBLIN’S GLIDER - SAME TIME (NIGHT)
ON PETER
Struggling with Green Goblin, hanging off his glider... Peter
pulls out a pumpkin bomb.... shoves it into the glider’s
mechanics...
BEEP-BEEP-BOOM! AGH! The two of them tumble, crash-landing
across the FALLEN SHIELD.
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (NIGHT)
The Cloak of Levitation drops Ned down and flies off.
NED
Thank you, Mr. Cape. Sir.
MJ (O.S.)
Ned?
MJ rounds the corner--
MJ (CONT'D)
Ned... Ned!
They run into each other’s arms.
EXT. THE FALLEN SHIELD - SAME TIME (NIGHT)
Peter gets to his feet, concerned, looking around...
PETER
(calls out)
MJ?!
164.
165.
EXT. STATUE OF LIBERTY - PEDESTAL - INTERCUT - SAME (DAWN)
MJ releases from the hug--
MJ
Peter?!
PETER (O.S.)
MJ?!
From the base of the Statue of Liberty, MJ and Ned look over
to see...
Peter on the shield at the water’s edge. MJ waves.
MJ
Peter! Hey!
PETER
Are you okay?
MJ
We’re okay.
He sighs in relief. Meanwhile...
Green Goblin JOLTS upright at the other end of the shield.
The sun just beginning to crest the horizon.
Peter turns to face him, eyes narrowing, seeing red.
Green Goblin rises, rips off his goggles.
GREEN GOBLIN
Poor, Peter. Too weak to send me
home to die.
PETER
No. I just want to kill you
myself.
GREEN GOBLIN
Attaboy!
Enraged, Peter rushes at Green Goblin -- they CLASH! Peter
PUMMELS him with a murderous intensity. Goblin breaks free --
SNICK! Releases his arm blades and swings them at Peter as
they battle it out... Peter getting the upper hand, brutally
beating Goblin back...
165.
166.
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
At the base of the Statue of Liberty, Raimi-Verse and WebbVerse Peter run forward to see--
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Peter batters Goblin until he’s down on his knees... a
barrage of punches... Goblin collapses to the ground, spent.
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
A quick look between the other Peters. We have to do
something.
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Peter lays into Goblin, who takes punch after punch after
punch...
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
MJ and Ned look on with concern as--
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Peter grabs Goblin’s glider, crashed at the base of the
shield.
He drifts towards Goblin, murder in his eyes... lifts the
glider over his head, about to bring the gleaming blades down
on Goblin when--
RAIMI-VERSE PETER jumps between them, stopping Peter!
Peter screams, unrelenting...
A pleading look on Raimi-Verse Peter’s face. Don’t do this.
Slowly, gradually... Peter relaxes. A wordless understanding
between the two Peter Parkers.
As Peter sets the glider down--
SHUNK! Raimi-Verse Peter’s face falls...
Goblin STABBED him in the back! Raimi-Verse Peter collapses.
166.
167.
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
ANGLE ON Webb-Verse Peter. He rushes forward with the Goblin
cure, spots the standoff on the shield...
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Goblin staggers upright, eager for more. Taunting Peter.
GREEN GOBLIN
She was there because of you...
Peter faces him, eyes narrowing.
GREEN GOBLIN (CONT'D)
I may have struck the blow. But
you...
(laughs)
You are the one that killed her.
As Green Goblin CACKLES with glee...
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
Webb-Verse Peter throws the Goblin cure!
EXT. THE FALLEN SHIELD - INTERCUT - SAME TIME (DAWN)
Peter turns, grabs it--
SHUNK! HE STABS GOBLIN IN THE NECK!
Goblin staggers. Shocked. In pain.
CLICK! PETER INJECTS GOBLIN WITH THE ANTI-SERUM!
From the floor of the shield, Raimi-Verse Peter smiles with
relief.
From the pedestal, Webb-Verse Peter sighs with relief.
Goblin falls back on his haunches, then... A look of
recognition.
NORMAN
...Peter?
Norman sees Raimi-Verse Peter on the ground. Remembering
everything. May.
167.
168.
NORMAN (CONT'D)
What have I done?
Webb-Verse Peter rushes to Raimi-Verse Peter’s aid. The
latter realizes the former tossed the cure.
RAIMI-VERSE PETER
It was you...
WEBB-VERSE PETER
You okay?
RAIMI-VERSE PETER
Uh, yeah, I’m good. I’ve been
stabbed before.
WEBB-VERSE PETER
Oh, good. Good, good, good...
Peter joins them.
PETER
Hey.
(re: stab wound)
Oh, man.
WEBB-VERSE PETER
Hey, nice catch.
PETER
Nice throw.
The three Peters share a moment. Then--
CHAOTIC RUMBLINGS FROM ABOVE!
RAIMI-VERSE PETER
What? Is that happening, or am I
dying?
WEBB-VERSE PETER
Oh, yeah, no. That’s happening,
that’s real.
RAIMI-VERSE PETER (O.S.)
Are there... people in the sky?
EXT. STATUE OF LIBERTY - TORCH - SAME TIME (DAWN)
High above the Statue of Liberty, the mangled spell
continues... SHADOWY SILHOUETTES forming everywhere...
168.
169.
Dr. Strange trembles from the strain of holding the
Multiverse at bay. But try as he might, more and more
silhouettes keep appearing.
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Peter can clearly see -- they’re running out of time.
PETER
I gotta go.
WEBB-VERSE PETER
Yeah, yeah, I got it.
(to Raimi-Verse Peter)
You okay?
EXT. STATUE OF LIBERTY - TORCH - MOMENTS LATER (DAWN)
Peter WEBS to the top of the torch.
PETER
What’s happening?
DR. STRANGE
They’re starting to come through,
and I can’t stop ‘em!
PETER
There’s gotta be something we can
do! Can’t you just cast the spell
again? But the original way,
before I screwed it up.
DR. STRANGE
We’re too late for that. They’re
here! They’re here because of you.
A beat as this lands on Peter. Then--
PETER
What if everyone forgot who I was?
DR. STRANGE
What?!
PETER
They’re coming here because of me,
right? Because I’m Peter Parker?
So cast a new spell, but this time
make everyone forget who Peter
Parker is. Make everyone forget...
me.
169.
170.
DR. STRANGE
No.
PETER
But it would work, right?
DR. STRANGE
Yeah, it would work. But you gotta
understand that would mean that
everyone who knows and loves you,
we...
(voice catches, then)
We’d have no memory of you. It
would be as though you never
existed.
PETER
...I know.
(resolved)
Do it.
Dr. Strange reluctantly nods, his heart breaking for Peter.
DR. STRANGE
You better go and say your
goodbyes. You don’t have long.
PETER
Thank you, sir.
Peter moves to leave--
DR. STRANGE
Call me Stephen.
Peter stops, moved by the gesture.
PETER
Thank you, Stephen.
DR. STRANGE
(smiles)
Yeah... still feels weird.
Peter smiles back.
PETER
I’ll see you around.
As Peter swings off, Strange chokes back emotion.
DR. STRANGE
So long, kid.
170.
171.
Then he looks to the sky, the Multiverse unfolding. He
begins to cast the new spell.
EXT. THE FALLEN SHIELD - CONTINUOUS (DAWN)
Webb-Verse Peter holds Raimi-Verse Peter up on his feet.
Peter swings down to meet them.
PETER
Hey! Uh... I think this is it. I
think you’re about to go home.
RAIMI-VERSE PETER
Okay.
WEBB-VERSE PETER
All right.
PETER
Um, look, I, uh... thank you! I
just want to-- I want you-- I want
to tell you that... I really don’t
know how to say this, I--
WEBB-VERSE PETER
Peter...
PETER
I want you to know that I’m--
The other two Peters smile.
RAIMI-VERSE PETER
You know. It’s what we do.
PETER
(smiles)
Yeah. It’s what we do. Um...
Right, I gotta find Ned and MJ.
Peter moves off, then quickly turns back. Hugs them.
PETER (CONT'D)
Thank you. Thank you. Thank you.
Thank you.
(pulls back)
I guess... I guess I’ll see you.
RAIMI-VERSE PETER
Same.
A final smile between the three. More than just counterparts
now. Friends.
171.
172.
As Peter runs off, Raimi-Verse Peter winces.
WEBB-VERSE PETER
You’re in so much pain, huh?
RAIMI-VERSE PETER
I am.
WEBB-VERSE PETER
Yeah.
EXT. STATUE OF LIBERTY - PEDESTAL - CONTINUOUS (DAWN)
Peter swings over to MJ and Ned. MJ sighs with relief.
MJ
You’re okay!
A group hug. Then Peter pulls back, takes them in...
PETER
Are you okay?
MJ
Yeah, we’re okay.
Peter notices a cut above MJ’s eye.
PETER
Oh my God, you’re bleeding.
Peter holds MJ’s face in his hand, inspects her cut.
MJ
No, I’m fine. I’m okay.
PETER
Are you sure?
MJ
I’m fine. I promise.
PETER
(relieved)
Okay. Okay...
MJ
Um... we should go, right?
Peter struggles to find the words. ECHOING THUNDER from
above. The new spell is quickly progressing...
172.
173.
PETER
You’re gonna forget who I am.
NED
...What?
MJ
Forget who you are -- what are you
talking about?
PETER
It’s okay. I’m gonna come and find
you, and I’ll explain everything.
MJ and Ned’s faces fall as they realize...
PETER (CONT'D)
I’ll make you remember me, and it
will be like none of this ever
happened. Okay?
MJ
(panicking)
Okay, but what if that doesn’t
work? What if-- What if that
doesn’t work? What if we can’t
remember you? I don’t want to do
that. I don’t-- I don’t want to do
that.
PETER
I know, MJ. I know.
MJ
But, what-- Is there not something
we can do? We can’t come up with,
like, a plan or something, you
know? There’s always something we
can do?
PETER
(shakes his head)
There’s nothing we can do.
(then, reassuring)
But it’ll be okay.
MJ tries to catch her breath, as Ned’s eyes brim with tears.
NED
You promise?
PETER
Yeah, I promise.
173.
174.
Peter and Ned do a bittersweet version of their special
handshake from HOMECOMING. Then Peter pulls Ned into a hug.
PETER (CONT'D)
I’ll come find you, okay?
NED
I know you will.
They release from the hug. Peter turns to MJ.
MJ
You better. If you don’t, I’m just
gonna figure it out. I’ve done it
before, I can do it again.
PETER
I promise I’ll fix this.
MJ
I really hate magic.
Peter laughs, a small, knowing grin.
PETER
Yeah, me too.
She takes him in, then--
MJ
I love you.
PETER
I love--
MJ
Just wait. Wait and tell me when
you see me again.
PETER
Sure.
Ned looks to the sky -- more RUMBLINGS as the new spell takes
effect.
Peter turns to MJ. They don’t have much longer...
He pulls MJ into a kiss. Magic swirling above them, just as
it did when the original spell was first cast in the Sanctum.
Peter and MJ locked in embrace.
174.
175.
EXT. STATUE OF LIBERTY - TORCH - SAME TIME (DAWN)
Atop the Statue of Liberty, Dr. Strange maneuvers the new
spell to override the broken one.
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Arms around each other, Raimi-Verse Peter and Webb-Verse
Peter watch as the magic takes hold.
EXT. STATUE OF LIBERTY - TORCH - SAME TIME (DAWN)
Dr. Strange continues to direct the new spell, as...
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
Max Dillon FADES AWAY... then Octavius...
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Norman DISAPPEARS...
EXT. STATUE OF LIBERTY - CROWN - SAME TIME (DAWN)
Inside the crown, Marko EVAPORATES...
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
Connors VANISHES...
EXT. STATUE OF LIBERTY - TORCH - SAME TIME (DAWN)
A WIDE SHOT of Dr. Strange floating above the Statue of
Liberty, manipulating the radiating circle of the spell.
EXT. THE FALLEN SHIELD - SAME TIME (DAWN)
Raimi-Verse Peter and Webb-Verse Peter wave goodbye as they
DISSOLVE into the ether...
EXT. STATUE OF LIBERTY - PEDESTAL - SAME TIME (DAWN)
BACK ON Peter and MJ, reluctant to let go...
175.
176.
He makes the first move -- steps back, jumps up on a ledge.
But before he webs off, he glances up at the Statue of
Liberty--
EXT. STATUE OF LIBERTY - TORCH - INTERCUT - SAME TIME (DAWN)
--Where Dr. Strange, his new spell nearly complete, nods his
own goodbye.
Peter looks back at MJ. The spell about to hit her, but she
manages to mouth one last “I love you.”
Peter WEBS off just before the light of the completed spell
washes over them...
A BLAST OF SPELL MAGIC! The sky clears. The new spell
complete. All is calm.
As the morning sun rises over Lady Liberty...
J. JONAH JAMESON (PRE-LAP)
It’s been a few weeks since the
fiasco on the Statue of Liberty--
INT. DAILY BUGLE STUDIO - A FEW WEEKS LATER (DAY)
J. Jonah Jameson reports live from his desk.
J. JONAH JAMESON
--And Spider-Man’s cultists
continue to contend that the vile
vigilante is a hero! Well, if he
were a hero, he’d unmask himself
and tell us who he really is!
Because only a coward conceals his
identity. Only a coward hides his
true intentions!
EXT. DONUT SHOP - DAY
Peter walks down the street. This time, no one recognizes
him.
J. JONAH JAMESON (V.O.)
Rest assured, ladies and gentlemen,
this reporter will uncover those
intentions come hell or high water.
Peter reads aloud to himself from a hand-written note:
176.
177.
PETER
Hi, my name is Peter Parker. You
don’t know me, but I... uh. Hi, my
name is Peter Parker, and you don’t
know me, but you--
He stops outside the donut shop. Now with holiday
decorations. Christmas lights. He enters...
INT. DONUT SHOP - CONTINUOUS (DAY)
Peter finds MJ, talking and laughing with an older customer,
a STAN LEE LOOK-ALIKE.
MJ turns, looks up at him, and waves. He’s taken aback...
Until he realizes she was waving at Ned, who has just entered
behind him.
NED
(to MJ)
Hey!
Ned walks past Peter and sits at the counter.
MJ
(to Ned)
One sec.
(to Peter)
Can I help you?
PETER
Hi, um, My name is Peter Parker.
And I...
(loses nerve)
Would like a coffee, please.
MJ
Okay, no problem, Peter Parker.
As MJ goes for the coffee pot, she chats with Ned. Hands
over a free donut.
MJ (CONT'D)
Donut for my fellow engineer.
NED
Oh... Wait, what?
MJ
MIT, they’re the Engineers. The
Mascot.
177.
178.
NED
Oh, right, right, right. I should
probably know that.
(then)
Look at you with the school spirit!
MJ
Tell anybody, I will deny it.
NED
Oh, right, right...
Ned looks back at his phone, scrolling.
Peter smiles. Happy to see them. Thrilled that they got in.
MJ slides Peter his coffee. ANGLE ON the cup: “We Are Happy
To Serve You.”
MJ
Peter Parker.
(no reply)
...Peter Parker?
Peter breaks his concentration from Ned, turns to MJ.
MJ (CONT'D)
Your coffee.
PETER
Right. Thank you.
MJ
Mmm-hmm.
PETER
Um... are you excited for MIT?
MJ is confused at first. But then she realizes -- he must
have overheard her and Ned.
MJ
Oh. Uh, right, yeah. Uh...
(then)
Yeah, actually, I am excited which
is weird ‘cause I don’t really get
excited about things. I kind of
expect disappointment--
PETER
--’Cause then you’ll never actually
be disappointed. Right?
A flicker of déjà vu on her face, then, recovering:
178.
179.
MJ
Uh, yeah. Right. It’s just, um--
I dunno, it just kinda feels
different this time for some
reason.
This gives him pause. Her new life.
Somewhat dazed, Peter pays for the coffee.
PETER
Um, what I was--
MJ brushes back her hair. He sees a Band-Aid above her eye --
her injury from the Statue of Liberty.
PETER (CONT'D)
(re: Band-Aid)
You okay?
MJ
It doesn’t really hurt anymore.
(beat, then)
Is there anything else?
Peter pauses. The moment of truth...
But he just shakes his head and smiles.
PETER
Uh... no.
Peter tucks his note back into his pocket.
PETER (CONT'D)
Thank you.
MJ
No problem.
Peter takes his coffee, looks over at Ned, then back at MJ.
PETER
I’ll uh... see you around.
He walks out the door.
HOLD ON MJ, watching Peter go with a lingering sense of...
recognition?
179.
180.
EXT. CEMETERY - DAY
A cold winter’s day. Peter stands before May’s grave, sets
down a flower. Reveal the grave is covered in them, placed
in front of a tombstone that reads: “WHEN YOU HELP SOMEONE,
YOU HELP EVERYONE.”
A figure approaches -- Happy. It’s clear he doesn’t
recognize Peter.
HAPPY
How’d you know her?
PETER
Through Spider-Man. You?
HAPPY
Same.
They stare at the grave for a beat.
HAPPY (CONT'D)
I lost a good friend a while back.
Felt like this.
(then)
It hurts ‘cause they’re gone. And
then it hurts all over again
because you remember what they
stood for, and you wonder, “Is all
that gone too?”
A beat as that lands on Peter.
PETER
No, it’s not gone. Everyone that
she helped... they’ll keep it
going.
HAPPY
You really think so?
PETER
I know it.
(then)
Take care of yourself, okay?
HAPPY
Yeah. Nice to meet you.
Peter nods, then walks away, leaving Happy to pay his
respects.
180.
181.
INT. PETER’S NEW APARTMENT - DAY
LANDLORD (O.S.)
Rent is due on the first of the
month. Don’t be late.
Peter carries a box into a studio apartment. Turns on the
light, takes in the barren space. His new home. A fresh
start.
He opens a box containing a GED test study manual, sets out
his personal effects... including the LEGO Emperor figurine
from the Death Star set he and Ned built (and rebuilt) many
times together.
INT. PETER’S NEW APARTMENT - LATER (NIGHT)
Peter looks out the window. Snow falling on New York. He
turns to his Spider-Man mask on the bed, grabs it...
Peter follows a New York police precinct app on his phone.
PRECINCT VOICE #1 (OVER PHONE)
4-3 Edward, do you need EMS assist?
PRECINCT VOICE #2 (OVER PHONE)
Uh, negative, Central. We’re gonna
need a car tow.
ANGLE ON a desk with a sewing machine. Scraps of red and
blue fabric. Nearby rests the LEGO Emperor figurine and the
coffee cup MJ gave Peter at the donut shop. He kept it.
In BG, Spider-Man slides up the window and leaps outside...
EXT. NEW YORK ROOFTOP - MOMENTS LATER (NIGHT)
Spider-Man flips and rolls across a snowy roof in a BLUE AND
RED SUIT (new for him, but reminiscent of suits he’s seen
before). Spider-Man leaps and--
EXT. ROCKEFELLER PLAZA - CONTINUOUS (NIGHT)
--Soars over the Rockefeller Christmas tree with a newfound
sense of freedom. Liberated from having to juggle two lives.
Peter Parker is no more, but Spider-Man lives on...
FADE OUT.
THE END


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)