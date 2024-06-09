var modalShare = document.getElementById("myModalShare");
var bts = document.getElementById("Btsharecd");
var span1 = document.getElementsByClassName("close1")[0];
bts.onclick = function () {
    modalShare.style.display = "block";
}
function addNote() {
    var title = document.getElementById('noteTitle').value || 'Không có tiêu đề';
    var content = document.getElementById('noteContent').value;
    if (content.trim() === '') {
        alert('Vui lòng nhập ghi chú của bạn.');
        return;
    }

    var noteList = document.getElementById('notes');
    var noteCount = noteList.children.length + 1;

    var note = document.createElement('div');
    note.className = 'note';

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function () {
        deleteNote(deleteBtn);
    };

    var noteHeader = document.createElement('div');
    noteHeader.className = 'note-header';

    var noteTitle = document.createElement('span');
    noteTitle.className = 'note-title';
    noteTitle.textContent = title;

    var noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    var noteText = document.createElement('p');
    noteText.textContent = content;

    noteHeader.appendChild(noteTitle);
    noteContent.appendChild(noteText);

    note.appendChild(deleteBtn);
    note.appendChild(noteHeader);
    note.appendChild(noteContent);

    noteList.appendChild(note);
    document.getElementById('modal').style.display = 'none';

    document.getElementById('noteForm').reset();
}

function deleteNote(element) {
    var note = element.parentElement;
    note.parentElement.removeChild(note);
}