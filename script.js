document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const webhookUrl = "deneme";

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const discord = document.getElementById('discord').value;
    const experience = document.getElementById('experience').value;
    const hostageScenario = document.getElementById('hostage-scenario').value;
    const criminalInterrogation = document.getElementById('criminal-interrogation').value;
    const teamworkExperience = document.getElementById('teamwork-experience').value;
    const leadershipSkills = document.getElementById('leadership-skills').value;
    const stressManagement = document.getElementById('stress-management').value;
    const moralDilemmas = document.getElementById('moral-dilemmas').value;
    const cyberSecurity = document.getElementById('cyber-security').value;
    const investigationSkills = document.getElementById('investigation-skills').value;
    const physicalFitness = document.getElementById('physical-fitness').value;
    const decisionMaking = document.getElementById('decision-making').value;
    const legalKnowledge = document.getElementById('legal-knowledge').value;
    const conflictResolution = document.getElementById('conflict-resolution').value;
    const multitasking = document.getElementById('multitasking').value;
    const communicationSkills = document.getElementById('communication-skills').value;
    const technologySkills = document.getElementById('technology-skills').value;
    const ethicsIntegrity = document.getElementById('ethics-integrity').value;
    const prioritization = document.getElementById('prioritization').value;
    const timeManagement = document.getElementById('time-management').value;
    const culturalAwareness = document.getElementById('cultural-awareness').value;
    const motivation = document.getElementById('motivation').value;
    const adaptability = document.getElementById('adaptability').value;
    const problemSolving = document.getElementById('problem-solving').value;

    const message = `
**Yeni FBI Başvurusu**

**Ad:** ${name}
**Yaş:** ${age}
**Discord Kullanıcı Adı:** ${discord}

**Deneyim:** ${experience}
**Rehine Durumu:** ${hostageScenario}
**Suçlu Sorgulama:** ${criminalInterrogation}
**Ekip Çalışması:** ${teamworkExperience}
**Liderlik Becerileri:** ${leadershipSkills}
**Stres Yönetimi:** ${stressManagement}
**Etik İkilemler:** ${moralDilemmas}
**Siber Güvenlik:** ${cyberSecurity}
**Araştırma Becerileri:** ${investigationSkills}
**Fiziksel Uygunluk:** ${physicalFitness}
**Karar Verme:** ${decisionMaking}
**Hukuk Bilgisi:** ${legalKnowledge}
**Çatışma Çözümü:** ${conflictResolution}
**Çoklu Görev Yönetimi:** ${multitasking}
**İletişim Becerileri:** ${communicationSkills}
**Teknoloji Becerileri:** ${technologySkills}
**Etik ve Dürüstlük:** ${ethicsIntegrity}
**Önceliklendirme:** ${prioritization}
**Zaman Yönetimi:** ${timeManagement}
**Kültürel Farkındalık:** ${culturalAwareness}
**Motivasyon:** ${motivation}
**Uyum Sağlama Yeteneği:** ${adaptability}
**Sorun Çözme:** ${problemSolving} 
`
;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (response.ok) {
            alert('Başvuru başarıyla gönderildi!');
        } else {
            alert('Başvurunuz gönderilemedi. Lütfen tekrar deneyin. Durum: ' + response.status);
            console.log('Sunucu hatası:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Başvurunuz gönderilemedi. Hata: ' + error);
    });
});
