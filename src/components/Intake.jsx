import MenuHeader from "../ui/MenuHeader";
import Navbar from "./../ui/Navbar";

export default function Intake() {
  return (
    <>
      <MenuHeader />
      <Navbar />
      <main className="px-3 md:w-2/3 mx-auto my-auto py-5">
        <div className="flex flex-col md:flex-row md:items-start gap-5">
          <div className="flex flex-col md:w-1/3 gap-5">
            <h3 className="text-2xl font-normal tracking-wider">Onboarding</h3>

            <p className="font-extralight">
              In the ever-changing field of psychology. We invite you to join us
              in the development of My Daily Therapy, designed to elevate the
              quality of care and support we offer to our valued users
            </p>
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}

function Form() {
  return (
    <form className="space-y-4">
      <GenderFieldset />
      <div>
        <label className="block text-lg" htmlFor="age">
          How old are you? *
        </label>
        <input
          className="mt-1 block rounded-md border shadow-sm py-1 px-2 w-1/2 focus:outline-none"
          id="age"
          name="age"
          placeholder="Your age"
          required
          type="text"
        />
      </div>

      <IdentityFieldset />
      <Relationship />
      <TherapyFieldset />
      <ShortQuestions />
      <DescriptionFieldset />
      <SleepingHabits />

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

function GenderFieldset() {
  return (
    <fieldset>
      <legend className="text-lg font-">What is your Gender?</legend>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="woman"
          />
          <span className="ml-2">Woman</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="man"
          />
          <span className="ml-2">Man</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="non-binary"
          />
          <span className="ml-2">Non Binary</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="transfeminine"
          />
          <span className="ml-2">Transfeminine</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="transmasculine"
          />
          <span className="ml-2">Transmasculine</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="agender"
          />
          <span className="ml-2">Agender</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="i-dont-know"
          />
          <span className="ml-2">I don't know</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="prefer-not-to-say"
          />
          <span className="ml-2">Prefer not to say</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="other"
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </fieldset>
  );
}
function IdentityFieldset() {
  return (
    <fieldset>
      <legend className="text-lg font-semibold">How do you identify</legend>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="straight"
          />
          <span className="ml-2">Straight</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="Gay"
          />
          <span className="ml-2">Gay</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="Lesbian"
          />
          <span className="ml-2">Lesbian</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="bi or pan"
          />
          <span className="ml-2">Bi or Pan</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="Prefer-not-to-say"
          />
          <span className="ml-2">Prefer not to say</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="questioning"
          />
          <span className="ml-2">Questioning</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="queer"
          />
          <span className="ml-2">Asexual</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="i-don't-know"
          />
          <span className="ml-2">I don&apos;t know </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="other"
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </fieldset>
  );
}

function Relationship() {
  return (
    <fieldset>
      <legend className="text-lg font-semibold">
        What is your relationship status.
      </legend>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="single"
          />
          <span className="ml-2">Single</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="in-a-relationship"
          />
          <span className="ml-2">In a relationship</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="married"
          />
          <span className="ml-2">Married</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="divorced"
          />
          <span className="ml-2">Divorced</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="widowed"
          />
          <span className="ml-2">Widowed</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="other"
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </fieldset>
  );
}

function TherapyFieldset() {
  return (
    <fieldset>
      <legend className="text-lg font-semibold">
        What led you to consider therapy today?
      </legend>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="depressed"
          />
          I&apos;ve been depressed
          <span className="ml-2">Single</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="anxious"
          />
          <span className="ml-2">I feel anxious or overwhelmed</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="mood"
          />
          <span className="ml-2">
            My mood is interfering with my job/school performance
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="relationships"
          />
          <span className="ml-2">
            I struggle with building and maintaining relationships.
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="purpose"
          />
          <span className="ml-2">
            I can&apos;t find purpose and meaning of life
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="grieving"
          />
          <span className="ml-2">I am grieving</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="trauma"
          />
          <span className="ml-2">I </span>have experienced trauma
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="specific"
          />
          <span className="ml-2">
            I need to talk through a specific challange
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="confidence"
          />
          <span className="ml-2">I want to gain cconfidence</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="improvemenr"
          />
          <span className="ml-2">
            New choice. I want to improve myself but do&apos;nt know where to
            straight
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="recommended"
          />
          <span className="ml-2">
            Recommended to me (friend, family, doctor)
          </span>
        </label>

        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="exploring"
          />
          <span className="ml-2">Just exploring</span>
        </label>

        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="other"
          />
          <span className="ml-2">other</span>
        </label>
      </div>
    </fieldset>
  );
}

function ShortQuestions() {
  return (
    <>
      <div className="mb-6">
        <p className="mb-2 text-lg font-semibold">
          Have you ever experienced anxiety, panic attacks or have any phobias?
        </p>
        <div className="flex items-center mb-2">
          <input
            className="w-4 h-4 rounded-md"
            id="anxiety-no"
            name="anxiety"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="anxiety-no">
            No
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="w-4 h-4"
            id="anxiety-yes"
            name="anxiety"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="anxiety-yes">
            Yes
          </label>
        </div>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-lg font-semibold">
          Are you currently taking any medication?
        </p>
        <div className="flex items-center mb-2">
          <input
            className="w-4 h-4"
            id="medication-no"
            name="medication"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="medication-no">
            No
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="w-4 h-4"
            id="medication-yes"
            name="medication"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="medication-yes">
            Yes
          </label>
        </div>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-lg font-semibold">
          Any history of alcohol use?
        </p>
        <div className="flex items-center mb-2">
          <input
            className="w-4 h-4"
            id="alcohol-no"
            name="alcohol"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="alcohol-no">
            No
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="w-4 h-4"
            id="alcohol-yes"
            name="alcohol"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="alcohol-yes">
            Yes
          </label>
        </div>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-lg font-semibold">
          Any history of marijuana use?
        </p>
        <div className="flex items-center mb-2">
          <input
            className="w-4 h-4"
            id="marijuana-no"
            name="marijuana"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="marijuana-no">
            No
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="w-4 h-4"
            id="marijuana-yes"
            name="marijuana"
            type="radio"
          />
          <label className="ml-2 text-md" htmlFor="marijuana-yes">
            Yes
          </label>
        </div>
      </div>
    </>
  );
}

function DescriptionFieldset() {
  return (
    <fieldset>
      <legend className="text-lg font-semibold">
        Which category describes you?
      </legend>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="indian-alaska"
          />
          <span className="ml-2">American Indian or Alaska Native</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="asian"
          />
          <span className="ml-2">Asian</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="hispanic"
          />
          <span className="ml-2">Hispanic, Latina or Spanish origin</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="middle-eastern"
          />
          <span className="ml-2">Middle Eastern</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="native-hawaiian"
          />
          <span className="ml-2">
            Native Hawaiian or Other Pacific Islander
          </span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="white"
          />
          <span className="ml-2">White</span>
        </label>
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="multiethnic"
          />
          <span className="ml-2">Multiethnic</span>
        </label>{" "}
        <label className="inline-flex items-center">
          <input
            className="form-radio"
            name="gender"
            type="radio"
            value="other"
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </fieldset>
  );
}

function SleepingHabits() {
  return (
    <div className="mb-6">
      <p className="mb-2 text-lg font-semibold">
        How would you rate your current sleeping habits?
      </p>
      <div className="flex items-center mb-2">
        <input
          className="w-4 h-4 rounded-md"
          id="anxiety-no"
          name="good"
          type="radio"
        />
        <label className="ml-2 text-md" htmlFor="anxiety-no">
          Good
        </label>
      </div>
      <div className="flex items-center">
        <input className="w-4 h-4" id="anxiety-yes" name="fair" type="radio" />
        <label className="ml-2 text-md" htmlFor="anxiety-yes">
          Fair
        </label>
      </div>

      <div className="flex items-center">
        <input className="w-4 h-4" id="anxiety-yes" name="poor" type="radio" />
        <label className="ml-2 text-md" htmlFor="anxiety-yes">
          Poor
        </label>
      </div>
    </div>
  );
}
