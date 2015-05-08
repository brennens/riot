<modal>
    <!-- <a href="#modal-{ opts.id }" class="btn btn-danger">{ opts.showbutton }</a> -->
    <button class="btn btn-danger" onclick={ openModal }>{ opts.showbutton }</button>

    <div class="lk-modal-wrap">
        <div class="lk-modal">
            <div class="lk-modal-header lk-clear">
                <h3>{ opts.title }</h3>
                <span class="close" onclick={ closeModal }>close</span>
            </div>
            <div class="lk-modal-content">
                <p>{ opts.content }</p>
            </div>
            <div class="lk-modal-footer">
                <button class="btn btn-default">{ opts.actionbutton }</button>
                <button class="btn btn-default">Submit</button>
            </div>
        </div>
    </div>

    openModal(e) {
        var target = e.target;
        modal = target.nextElementSibling;
        modal.classList.add('is-visible');
    }

    closeModal(e) {
        var target = e.target;
        modal = target.parentElement.parentElement.parentElement;
        modal.classList.remove('is-visible');
    }
</modal>