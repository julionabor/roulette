let rotation = 0
let question = 0
let recommendation = document.getElementById('recommendation')
let message= document.getElementById("message")
if (rotation === 0) { 
  //Recommendation 1
  recommendation.innerHTML = `
  ____________________________________________<br/>
  <h2>RECOMMENDATION:</h2>
  For depression screening in PWE, the
  Neurological Disorders Depression
  Inventory for Epilepsy (NDDI-E) with a cutoff
  point of >13 is recommended.`
  question= 1
}
function rotateImg(param) {
  message.innerHTML= ''
  if(param === 1)
    rotation += -24; // add 90 degrees, you can change this as you want
  if(param === 0){ 
    rotation +=24;
    question= question -1;
  }
  if (rotation === -360) { 
    // 360 means rotate back to 0
    container.style.backgroundColor = '#00BFFF';
    rotation = 0;
    //Recommendation 1
  recommendation.innerHTML = `
  ____________________________________________<br/>
  <h2>RECOMMENDATION:</h2>
  For depression screening in PWE, the
  Neurological Disorders Depression
  Inventory for Epilepsy (NDDI-E) with a cutoff
  point of >13 is recommended.`
  question= 1
  }

  if(rotation == -24){
    //Recommendation 2
    recommendation.innerHTML = `
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE, it is recommended that a
    neurologist and/or psychiatrist make a
    diagnosis of depression through anamnesis
    and following the ICD-10 diagnostic criteria.`
    question= 2
  }else if(rotation == -48){
    //Recommendation 3
    recommendation.innerHTML = `
     ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE, it is recommended to evaluate the
    risk of suicide by their neurologist and/or
    psychiatrist through anamnesis.`
    question= 3
  } else if(rotation == -72){
    //Recommendation 4
    recommendation.innerHTML = `
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    Depression is considered to be secondary to
    epilepsy in those patients in whom
    depressive symptoms occur with seizures
    (peri-ictal) or when they are related to
    antiseizure medication.`
    question= 4
  } else if(rotation == -96){
    //Recommendation 5
    recommendation.innerHTML = `
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE, it is recommended to refer the patient to a
    psychiatrist as soon as possible if there is suspicion of
    another psychiatric comorbidity, psychotic depression,
    bipolar disorder, risk of suicide, if there is no response
    to the second antidepressant treatment (at adequate
    dose, duration and adherence) or if augmentation
    of antidepressant treatment is needed..`
    container.style.backgroundColor = '#9400D3';
    question= 5
  } else if(rotation == -120){
    //Recommendation 6
    recommendation.innerHTML = `
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE and depression, the selection of antiseizure
    medication will depend on the characteristics of the disease
    and the patient's profile. In general, the use of lamotrigine,
    valproate, eslicarbazepine acetate, carbamazepine, and
    oxcarbazepine is recommended; the use of
    levetiracetam, phenobarbital, topiramate, and
    perampanel is less recommended.`
    question= 6
  }else if(rotation == -144){
    //Recommendation 7
    recommendation.innerHTML = `
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE and depression, it is recommended to start
    treatment for depression as soon as possible after
    diagnosis, especially if there is a risk of suicide.`
    question= 7
  }else if(rotation == -168){
    //Recommendation 8
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE and depression, antidepressant treatment
    selection will depend on the characteristics of the
    disease and the patient's profile. In general, the
    use of selective serotonin reuptake inhibitors
    and dual-type antidepressants is
    recommended; bupropion, clomipramine,
    and maprotiline are less recommended.`
    question= 8
  }else if(rotation == -192){
    //Recommendation 9
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In pregnant PWE and depression, a risk-benefit balance
    should be made between using antidepressants and not
    using them. The patient should be informed of that
    risk-benefit evaluation to allow shared
    decision-making between the clinician and the
    patient; this process should be recorded in the
    clinical chart. If an antidepressant is needed,
    SSRIs and SNRIs are usually the
    first-choice treatment for this
    population.`
    question= 9
  }else if(rotation == -216){
    //Recommendation 10
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    In PWE and mild depressive episodes, psychotherapy is
    recommended, and if the depressive episodes are
    moderate-severe, psychotherapy in combination with
    antidepressant treatment is recommended. In each
    case, the psychotherapist will establish the
    number of psychotherapy sessions depending
    on the patient and the type of therapy
    established.`
    question= 10
  }else if(rotation == -240){
    //Recommendation 11
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    It is recommended to continue antidepressant
    treatment for a minimum of 6 months after
    remission in patients with a first episode and a
    minimum of 9 months in cases of a recurrent
    episode or severe depression.`
    question= 11
  }else if(rotation == -264){
    //Recommendation 12
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    When an antidepressant should be discontinued, it is
    recommended to do so gradually over 1 to 4
    weeks.`
    question= 12
  }else if(rotation == -288){
    //Recommendation 13
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    It is suggested to change ASM in a PWE diagnosed with
    depression if a causal relationship between the ASM and
    the depressive episode is suspected or if the
    depressive symptoms may worsen due to the ASM
    treatment.`
    question= 13
  }else if(rotation == -312){
    //Recommendation 14
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    Follow-up of PWE and depression must be maintained
    according to the specialist's judgment, generally
    recommending follow-up for at least 6-12 months after
    remission of depressive symptoms and withdrawal
    of treatment.`
    container.style.backgroundColor = '#191970';
    question= 14
  }else if(rotation == -336){
    //Recommendation 15
    recommendation.innerHTML = `    
    ____________________________________________<br/>
    <h2>RECOMMENDATION</h2>
    The psychiatric follow-up of a PWE at risk of
    suicide must be maintained according to the
    psychiatrist's judgment, following the
    recommendations and/or follow-up clinical
    protocols established at their center.`
    question= 15
  }
  document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
}
  let element = document.getElementById("question")
  element.addEventListener("click", showQuestion);
  
function showQuestion(){
  console.log(question)
  if(question <= 0){
    question= 15;
  }
  switch(question){
    case 1: 
      message.innerHTML = `<h2> QUESTION </h2>
      What screening tool for depression should
      be used for PWE?`
      break
    case 2:
      message.innerHTML = `<h2> QUESTION </h2>
      How should depression be
      diagnosed in PWE?`
      break
    case 3:
      message.innerHTML = `<h2> QUESTION </h2>
      How should the risk of suicide
      be assessed in PWE?`
      break
    case 4:
      message.innerHTML = `<h2> QUESTION </h2>
      In what situations do you
      consider that depression is
      secondary to epilepsy?`
      break
    case 5:
      message.innerHTML = `<h2> QUESTION </h2>
      A. What are the situations in which referral to
      psychiatry should not be delayed in a PWE and
      depression?
      B. After how many therapeutic attempts, with
      adequate dosage and duration, is it recommended to
      refer the patient to psychiatry?`
      break
    case 6:
      message.innerHTML = `<h2> QUESTION </h2>
      In PWE and depression:
      A. What is the recommended antiseizure
      medication?
      B. What antiseizure medications should
      be avoided?`
      break
    case 7:
      message.innerHTML = `<h2> QUESTION </h2>
      When should antidepressant
      treatment be started in PWE?`
      break
    case 8:
      message.innerHTML = `<h2> QUESTION </h2>
      In PWE and depression:
      A. What is the recommended antidepressant
      medication?
      B. What antidepressants should be avoided?`
      break
    case 9:
      message.innerHTML = `<h2> QUESTION </h2>
      In a pregnant patient with epilepsy and
      depression:
      A. What is the recommended antidepressant medication?
      B. What antidepressants should be avoided?`
      break
    case 10:
      message.innerHTML = `<h2> QUESTION </h2>
      A. When should psychotherapy be recommended for
      a patient with epilepsy and depression?
      B. What is the recommended number of psychotherapy
      sessions?`
      break
    case 11:
      message.innerHTML = `<h2> QUESTION </h2>
      How long should antidepressant treatment be
      maintained in PWE?`
      break
    case 12:
      message.innerHTML = `<h2> QUESTION </h2>
      How should antidepressant treatment be
      discontinued in PWE?`
      break
    case 13:
      message.innerHTML = `<h2> QUESTION </h2>
      Is it recommended to change antiseizure
      medications in PWE with a diagnosis of depression?
      In what cases?
      For which medications?`      
      break
    case 14:
      message.innerHTML = `<h2> QUESTION </h2>
      How long should a psychiatric follow-up
      of a patient with epilepsy and depression
      be maintained?`
      break
    case 15:
      message.innerHTML = `<h2> QUESTION </h2>
      How long should a psychiatric follow-up
      of a patient with epilepsy and a risk of
      suicide be maintained?`
      break
    default:
      message.innerHTML= ''
    
  }
}