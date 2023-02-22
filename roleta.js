console.clear();

const ig = {
  current: 1,
  colors: {
    screening: "#00b5e2",
    management: "#662d91",
    followup: "#004289"
  },
  labels: {
    question: "question",
    recomendation: "recomendation",
    screening: "Screening and Diagnosis",
    management: "Management of Depression",
    followup: "Follow-up"
  },
  
  contentEl: document.getElementById('wheel-content-inner'),
  hideContent() { this.contentEl.style.opacity = 0 },
  showContent() { this.contentEl.style.opacity = 1 },
  showContentDelay() { setTimeout(this.showContent.bind(this) , 250) },
    
  get currentShowBtnEl() {
    const id = this.items.find((item)=> item.id == this.current).btnShowId;
    return document.getElementById(id);
  },
  
  get currentHideBtnEl() {
    const id = this.items.find((item)=> item.id == this.current).btnHideId;
    return document.getElementById(id);
  },
  
  showQuestionText() {
    const question = this.items.find((item)=> item.id == this.current).question;
    document.getElementById('wheel-quest').innerHTML = question;
  },
  
  hideQuestionText() {
    document.getElementById('wheel-quest').innerHTML = '';
  },
  
  items: [
    {
      id: 1,
      question: "What screening tool for depression should be used for PWE?",
      recommendation: "For depression screening in PWE, the Neurological Disorders Depression Inventory for Epilepsy (NDDI-E) with a cutoff point of >13 is recommended.",
      section: "screening",
      btnShowId: "b-plus-1",
      btnHideId: "b-minus-1"
    },
    {
      id: 2,
      question: "What screening tool for depression should be used for PWE?",
      recommendation: "For depression screening in PWE, the Neurological Disorders Depression Inventory for Epilepsy (NDDI-E) with a cutoff point of >13 is recommended.",
      section: "screening",
      btnShowId: "b-plus-1",
      btnHideId: "b-minus-1"
    },
    {
      id: 3,
      question: "How should depression be diagnosed in PWE?",
      recommendation: "In PWE, it is recommended that a neurologist and/or psychiatrist make a diagnosis of depression through anamnesis and following the ICD-10 diagnostic criteria.",
      section: "screening",
      btnShowId: "b-plus-2",
      btnHideId: "b-minus-2"
    },
    {
      id: 4,
      question: "How should the risk of suicide be assessed in PWE?",
      recommendation: "In PWE, it is recommended to evaluate the risk of suicide by their neurologist and/or psychiatrist through anamnesis.",
      section: "screening",
      btnShowId: "b-plus-3",
      btnHideId: "b-minus-3"
    },
    {
      id: 5,
      question: "In what situations do you consider that depression is secondary to epilepsy?",
      recommendation: "Depression is considered to be secondary to epilepsy in those patients in whom depressive symptoms occur with seizures (peri-ictal) or when they are related to antiseizure medication.",
      section: "screening",
      btnShowId: "b-plus-4",
      btnHideId: "b-minus-4"
    },
    {
      id: 6,
      question: "A. What are the situations in which referral to psychiatry should not be delayed in a PWE and depression?<br /> B. After how many therapeutic attempts, with adequate dosage and duration, is it recommended to refer the patient to psychiatry?",
      recommendation: "In PWE, it is recommended to refer the patient to a psychiatrist as soon as possible if there is suspicion of another psychiatric comorbidity, psychotic depression, bipolar disorder, risk of suicide, if there is no response to the second antidepressant treatment (at adequate dose, duration and adherence) or if augmentation of antidepressant treatment is needed.",
      section: "management",
      btnShowId: "b-plus-5",
      btnHideId: "b-minus-5"
    },
    {
      id: 7,
      question: "In PWE and depression:<br /> A. What is the recommended antiseizure medication?<br /> B. What antiseizure medications should be avoided?",
      recommendation: "In PWE and depression, the selection of antiseizure medication will depend on the characteristics of the disease and the patient's profile. In general, the use of lamotrigine, valproate, eslicarbazepine acetate, carbamazepine, and oxcarbazepine is recommended; the use of levetiracetam, phenobarbital, topiramate, and perampanel is less recommended.",
      section: "management",
      btnShowId: "b-plus-6",
      btnHideId: "b-minus-6"
    },
    {
      id: 8,
      question: "When should antidepressant treatment be started in PWE?",
      recommendation: "In PWE and depression, it is recommended to start treatment for depression as soon as possible after diagnosis, especially if there is a risk of suicide.",
      section: "management",
      btnShowId: "b-plus-7",
      btnHideId: "b-minus-7"
    },
    {
      id: 9,
      question: "<b>In PWE and depression</b>:<br /> A. What is the recommended antidepressant medication?<br /> B. What antidepressants should be avoided?",
      recommendation: "In PWE and depression, antidepressant treatment selection will depend on the characteristics of the disease and the patient's profile. In general, the use of selective serotonin reuptake inhibitors and dual-type antidepressants is recommended; bupropion, clomipramine, and maprotiline are less recommended.",
      section: "management",
      btnShowId: "b-plus-8",
      btnHideId: "b-minus-8"
    },
    {
      id: 10,
      question: "<b>In a pregnant patient with epilepsy and depression</b>:<br /> A. What is the recommended antidepressant medication?<br /> B. What antidepressants should be avoided?",
      recommendation: "In pregnant PWE and depression, a risk-benefit balance should be made between using antidepressants and not using them. The patient should be informed of that risk-benefit evaluation to allow shared decision-making between the clinician and the patient; this process should be recorded in the clinical chart. If an antidepressant is needed, SSRIs and SNRIs are usually the first-choice treatment for this population.",
      section: "management",
      btnShowId: "b-plus-9",
      btnHideId: "b-minus-9"
    },
    {
      id: 11,
      question: "A. When should psychotherapy be recommended for a patient with epilepsy and depression?<br />B. What is the recommended number of psychotherapy sessions?",
      recommendation: "In PWE and mild depressive episodes, psychotherapy is recommended, and if the depressive episodes are moderate-severe, psychotherapy in combination with antidepressant treatment is recommended. In each case, the psychotherapist will establish the number of psychotherapy sessions depending on the patient and the type of therapy established.",
      section: "management",
      btnShowId: "b-plus-10",
      btnHideId: "b-minus-10"
    },
    {
      id: 12,
      question: "How long should antidepressant treatment be maintained in PWE?",
      recommendation: "It is recommended to continue antidepressant treatment for a minimum of 6 months after remission in patients with a first episode and a minimum of 9 months in cases of a recurrent episode or severe depression.",
      section: "management",
      btnShowId: "b-plus-11",
      btnHideId: "b-minus-11"
    },
    {
      id: 13,
      question: "How should antidepressant treatment be discontinued in PWE?",
      recommendation: "When an antidepressant should be discontinued, it is recommended to do so gradually over 1 to 4 weeks.",
      section: "management",
      btnShowId: "b-plus-12",
      btnHideId: "b-minus-12"
    },
    {
      id: 14,
      question: "Is it recommended to change antiseizure medications in PWE with a diagnosis of depression?<br /> In what cases?<br /> For which medications?",
      recommendation: "It is suggested to change ASM in a PWE diagnosed with depression if a causal relationship between the ASM and the depressive episode is suspected or if the depressive symptoms may worsen due to the ASM treatment.",
      section: "management",
      btnShowId: "b-plus-13",
      btnHideId: "b-minus-13"
    },
    {
      id: 15,
      question: "How long should a psychiatric follow-up of a patient with epilepsy and depression be maintained?",
      recommendation: "Follow-up of PWE and depression must be maintained according to the specialist's judgment, generally recommending follow-up for at least 6-12 months after remission of depressive symptoms and withdrawal of treatment.",
      section: "followup",
      btnShowId: "b-plus-14",
      btnHideId: "b-minus-14"
    },
    {
      id: 16,
      question: "How long should a psychiatric follow-up of a patient with epilepsy and a risk of suicide be maintained?",
      recommendation: "The psychiatric follow-up of a PWE at risk of suicide must be maintained according to the psychiatrist's judgment, following the recommendations and/or follow-up clinical protocols established at their center.",
      section: "followup",
      btnShowId: "b-plus-15",
      btnHideId: "b-minus-15"
    }
  ]
  
}

const showQuestion = (e) => {
  // igoneres children clicks
  console.log('fire in the hole');
  ig.currentShowBtnEl.style.display = "none";
  ig.showQuestionText();
};

const igProxy = new Proxy(ig, {
  set(target, key, value) {
    if (key === 'current') {
      console.log(`Current property changed from ${target.current} to ${value}`);
      const item = ig.items.find((item)=> item.id == value);
      const prevItem = ig.items.find((item)=> item.id == target.current);
      document.getElementById('wheel-rec').innerHTML = item.recommendation;
      document.getElementById('wheel-content').style.backgroundColor = ig.colors[item.section]
      // item.btnShowId
      // console.log(document.getElementById(item.btnShowId));
      const el = document.getElementById(item.btnShowId);
      const prevEl = document.getElementById(prevItem.btnShowId);
      
      
      
      // console.log(prevEl)
      //reset prev shit
      prevEl.removeEventListener('click', showQuestion, true);
      prevEl.style.display = 'block';
      ig.hideQuestionText();
      
      //add new shit
      el.addEventListener('click', showQuestion, true);
      
      // Call your function here that should be executed when the current property changes
    }
    target[key] = value;
    return true;
  }
});

TweenLite.set("#wheel", {
  transformOrigin: "center"
});
//it doesn't get much easier than this ;)
const draggable = Draggable.create("#wheel", {
  type: "rotation",
  inertia: true,
  onDrag: function() {
    console.log(this.rotation);
    ig.hideContent();
  },
  onDragEnd: () => ig.showContent(),
  snap: function(endValue) {
    var step = 360 / 16;
    var extra = 0
    
    if (Math.ceil(Math.abs(endValue / step)) % 16 == 0
       || Math.ceil(Math.abs(endValue / step)) % 16 == 1 ) {
      // return 0
    }
    
    
    const normalizedAngle = (-endValue % 360 + 360) % 360;
    console.log(Math.ceil(Math.abs(endValue / step)), normalizedAngle)
    igProxy.current = Math.ceil(normalizedAngle / step) % 16 + 1;
    
    return Math.ceil( endValue / step ) * step - step/2;
  }
});

$("#rotation").click(function() {
  console.log(gsap.getProperty("#knob", "rotation"), "from element");
  console.log(Draggable.get("#knob").rotation, "from the Draggable");
});

/*
More info on Club GreenSock and other bonus plugins
https://www.greensock.com/club
*/