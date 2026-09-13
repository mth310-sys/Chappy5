更新日: 2026-09-13

## 現在地点
- recordCount: **1588**
- latestRecordAdded: **L009 RE:CYBORG — No.1588**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-04_l009-re-cyborg.md`
- chronologicalFrontier: **2023-09-04**
- frontierLatestMachine: **L009 RE:CYBORG — No.1588**
- schema: **resetBehavior v0.7**
- status: **2023-09-04_GROUP_OPEN_3_OF_5_KNOWN_PROCESSED / NEXT_NO1589_CANDIDATE_GRANBELM / THEN_FAMISTA / GROUP_BOUNDARY_AUDIT_REQUIRED_BEFORE_CLOSE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1587 `パチスロ傷物語 -始マリノ刻-` を確認して開始。
- INDEXは旧表示（19件）のままなので、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- handoff指定の次候補 `L009 RE:CYBORG` をNo.1588として性能コア + resetBehavior v0.7で追加。
- 2023-09-04群はcanonical 5機を維持: `L戦国乙女4 戦乱に閃く炯眼の軍師` / `パチスロ傷物語 -始マリノ刻-` / `L009 RE:CYBORG` / `回胴式遊技機 グランベルム` / `ファミスタ回胴版!!`。3機処理済みのため群はOPEN 3/5。
- 欠損は機種名・正式型式・検定番号・メーカーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 加速目 / 周期 / ATレベル / ガックン / 有利区間` を組み替え、公式/業界記事・旧DB・当時解析・後年整理資料を横断してから判定。

## No.1588 — L009 RE:CYBORG
- path: `docs/real_machine_db/machines/2023-09-04_l009-re-cyborg.md`
- manufacturer: **ニューギン**
- formalModel / inspectionCode: **Lパチスロ009RE:CYBORG-NZ / 3S0498**
- releaseDate: **2023-09-04**
- generation/system: **6.5号機 / スマスロAT / 周期抽選 + ST型AT**
- payoutRate 設定1～6: **97.6 / 98.8 / 100.4 / 104.8 / 108.3 / 114.9%**
- CZ: **1/246 / 1/237 / 1/230 / 1/218 / 1/218 / 1/214**
- AT初当たり: **1/614 / 1/597 / 1/581 / 1/550 / 1/539 / 1/535**
- base: **約38.7G/50枚**
- netIncrease: **約7.0枚/G**
- basic: BIG **150枚+α** / SUPER BIG **300枚+α** / STパート9G / 加速装置ベルナビ3～33回+α。
- normal ceiling: **AT間最大1280G+α** / **加速目最大39回**。加速目規定回数候補は6/9/18/27/36/39回。
- reset: 設定変更で **有利区間 / AT間G / 加速目回数 / 周期 / アクセルP / バブーP / 内部状態RESET**。周期決定ゾーン（非有利区間）から開始し1周期目へ。
- carry: 据え置きは **有利区間 / 天井 / 加速目 / 周期 / ポイント / 内部状態 / ステージCARRY_OVER**。メニュー画面情報のみクリア。
- pure power: 電源OFF→ONも据え置き同等で、**天井 / 加速目 / 周期 / 内部状態 / ステージ / 有利区間CARRY_OVER**。メニュー表示のみクリア。
- reset benefit: **設定変更後の次回AT初当たり時はATレベル選択が優遇**。具体的レベル振り分け率は公開固定値を確認できず。
- reset ceiling: 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常の1280G+α / 加速目最大39回を0から再セット。
- resetDetection: 設定変更は周期決定ゾーン開始、電断/据え置きは前日ステージ引継ぎのため、前日が周期移行先決定画面ヤメでない限り比較的判別しやすい。有利区間ランプ判別不可。メニュー表示は両方クリアされるため単独判別不可。
- machine-specific reel gakkun: **UNVERIFIED_AFTER_RESEARCH**。
- important distinction: 通常稼働中の **設定変更以外**の有利区間リセット後に付く「超加速モード」チャンス / 初当たり優遇は、朝一設定変更恩恵と分離。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## conflicts / missing retained
- 設定変更後ATレベル別具体的振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時の内部状態別初期振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 加速目規定回数6/9/18/27/36/39回の各振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 後年の一部立ち回り資料には「リセット実戦値が弱い」旨の評価があるが、仕様値ではないため、複数解析で確認できる「設定変更後次回ATレベル優遇」と競合する公式数値として扱わない。

## 2023-09-04群 — OPEN 3/5 known
1. L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586 **DONE**
2. パチスロ傷物語 -始マリノ刻- — No.1587 **DONE**
3. L009 RE:CYBORG — No.1588 **DONE**
4. 回胴式遊技機 グランベルム — **NEXT / No.1589候補**
5. ファミスタ回胴版!! — pending

### 群境界
- 2023-09-04 canonical 5機の構成は前handoff監査を継承。
- 群CLOSED前にPB/別型式/25Φ・30Φ派生/地域先行/延期・段階導入を再監査すること。

## 次回再開地点
1. **No.1589候補 `回胴式遊技機 グランベルム`（2023-09-04）**を最優先で処理。
2. 続いて `ファミスタ回胴版!!` を処理。
3. 5機処理後、2023-09-04群のPB/別型式/派生・地域先行・延期/段階導入を再監査しCLOSED判定。
4. その後2023-09-19群へ進む（候補: `L麻雀格闘倶楽部 覚醒`, `L戦国コレクション5 超極楽LOOP`）。

## 今回参照した主要ソース
取得日: 2026-09-13
- ニューギン販売 / PR TIMES: https://prtimes.jp/main/html/rd/p/000000031.000075282.html
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/25076/nippon
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003751/
- HAZUSE: https://hazuse.com/machine/pachislot/3S0498/
- パチビー: https://www.pachibee.jp/machines/index/223070002
- 一撃 スペック: https://1geki.jp/slot/l_009recyborg/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_009recyborg/4/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/603/16556/
- なな徹 AT: https://nana-press.com/kaiseki/machine/603/16562/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9880
- スロパチクエスト: https://www.slopachi-quest.com/article/009recyborg-tenjou/

## リレー継続ルール
- 最新mainを再取得し、README → ミッションv0.7 → INDEX → LATEST_HANDOFF → No.1588レコードの順で確認する。
- mainがこのhandoffより進んでいた場合は必ずmain側を優先し、既処理機種を重複登録しない。
- 欠損は検索語・資料系統を変えて再探索してからUNVERIFIED判定。
- 競合値は平均せずCONFLICTを保持。
- 実機完全再現用の細かな内部抽選へ過剰に掘らず、物差し性能コア + ホール経営/朝一客AIに必要なresetBehavior粒度を維持する。
