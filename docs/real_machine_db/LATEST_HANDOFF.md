更新日: 2026-09-12

## 現在地点
- recordCount: **1438**
- latestRecordAdded: **パチスロ かまいたちの夜 — No.1438**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-10-04_kamaitachi-no-yoru.md`
- chronologicalFrontier: **2021-10-04**
- frontierLatestMachine: **パチスロ かまいたちの夜 — No.1438**
- schema: **resetBehavior v0.7**
- status: **2021-10-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1437「ニューパルサーDX3」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1438「パチスロ かまいたちの夜」を追加。
- 2021-10-04群は既知5機すべて処理済み。2021年10月のパチスロ導入機一覧でもこの5機構成を再確認し、10/11・10/18・10/25の追加パチスロ本線候補は確認できなかったためCLOSED。
- 遡及resetBehavior QAは `2007-05_kemonocchi.md`（けものっち!）を正式再探索し、性能側PARTIALは維持したまま reset側を `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- Git追加履歴を確認し、けものっち!の次の新規実機レコード追加は `2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）。次回QAカーソルに設定。

## No.1438 — パチスロ かまいたちの夜
- path: `docs/real_machine_db/machines/2021-10-04_kamaitachi-no-yoru.md`
- manufacturer: **オーイズミ**
- formalModel: **Sパチスロかまいたちの夜SX**
- certificationNumber: **0S0366**
- releaseDate: **2021-10-04**
- generation/system: **6.1号機 / A+RT / 技術介入 / 完走型RT / CZ周期天井**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.8〜102.0 / 98.9〜103.0 / 101.9〜106.0 / 104.0〜108.0%**（技術介入条件別レンジ）
- BIG合算: **1/331.0 / 1/322.8 / 1/300.6 / 1/292.6**
- REG合算: **1/339.6 / 1/331.0 / 1/310.6 / 1/293.9**
- bonusCombined: **1/167.6 / 1/163.4 / 1/152.8 / 1/146.6**
- baseGamesPer50: **約39G（設定1）〜43G（設定6）/50枚**
- netIncrease: **RT約0.4枚/G**
- basicPayout: **かまいたちBONUS平均約172枚 / BIG平均約147枚 / REG平均約65枚**
- normalCeiling: **CZ終了後128G or 256GでCZ「運命分岐モード」**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_STATE_DEPENDENT_MORNING_START_AND_POWER_CARRYOVER**

### resetBehavior v0.7 — No.1438
- **設定変更**: CZ天井進行RESET。通常時から設定変更した場合は通常時開始、ボーナス/CZ/RTなど通常時以外から設定変更した場合はCZ「運命分岐モード」開始。
- **据え置き**: CZ天井進行はCARRY_OVER。前日遊技状態の細部は閉店状態・停止手順依存。
- **純電源OFF→ON**: CZ天井G数はCARRY_OVER。CZ/RT残G・成立済みボーナス/告知状態の完全な内部契約は1gekiでも調査中のままで、一般論補完せず `PARTIAL_DETAIL_UNVERIFIED`。
- **天井**: 通常システムは128G/256G。難易度高の転落側ビタ成功で次回128G、失敗で256G。難易度低は75%で128G、25%で256G。これは設定変更専用振り分けではない。
- **有利区間**: NOT_APPLICABLE。複数解析資料で有利区間なしと明記。
- **朝一恩恵/不利**: 通常時以外からの設定変更なら朝一CZ開始。通常時天井進行は変更で消えるため宵越し進行を失う。
- **変更判別**: 朝一CZ開始なら変更の可能性が高いが、前日CZ終了なら判別不能。通常時開始でも通常時から設定変更したケースがあるため据え置き確定にはならない。本機固有ガックンは再探索後もUNVERIFIED。
- **公開朝一数値**: 設定変更専用の固定CZ開始率・モード振り分けは確認されない。128/256G選択関連数値は通常CZシステムとして別管理。

## 2021-10-04群 — CLOSED
1. **ファンキージャグラー2 — No.1434 / DONE**
2. **パチスロツインエンジェルPARTY — No.1435 / DONE**
3. **SLOTタブー・タトゥー — No.1436 / DONE**
4. **ニューパルサーDX3 — No.1437 / DONE**
5. **パチスロ かまいたちの夜 — No.1438 / DONE**
- 2021年10月の複数導入一覧を再監査し、パチスロはこの5機で一致。

## 次回本線の再開地点
- **2021-11-08群 / No.1439候補: パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION**。
- 10/04後〜11/07の空白境界を導入予定一覧で確認し、次の主要パチスロ導入日は2021-11-08。
- 2021-11-08既知候補: **ANEMONE / CCエンジェル / パチスロGANTZ極 THE SURVIVAL GAME / パチスロ戦国乙女 暁の関ヶ原-DARKNESS- / ハイハイシオサイ2**。
- 次回開始時に全メーカー・PB・地域先行・25/30Φ別型式・延期/段階導入を再監査してからNo.1439を固定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `status: PARTIAL` は維持。50枚ベース等の既存性能欠損をリセットQA都合で変更していない。
- 設定変更/据え置き/純電断時の特殊リプレイ後プチRT、成立済みボーナス/告知状態、固有変更判別を再探索したが、機種固有契約を直接固定できず一般的5号機挙動から補完しなかった。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）**。

## GitHub保存
- No.1438追加 commit: `3c21c50666e7026ef7fea4ae7233d5faae89b0d5`
- けものっち! reset QA commit: `8888aff1306500b76ce903e58d3f2d4616f4b8f6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1438 パチスロ かまいたちの夜
- https://news.p-world.co.jp/articles/17487/greenbelt
- https://p-bomb.co.jp/industry/maker/1847/
- https://hazuse.com/machine/pachislot/0S0366/
- https://pachiseven.jp/machines/6369/cutout/2
- https://pachiseven.jp/machines/6369/cutout/3
- https://chonborista.com/slot/oizumi-slot/146434/comment-page-9/
- https://www.slopachi-quest.com/article/kamaitachinoyoru-tenjou/
- https://slogati.com/kamaitachi/
- https://1geki.jp/slot/s_kamaitachi/3/

### けものっち! reset QA
- https://hazuse.com/machine/pachislot/6S1282/
- https://hazuse.com/i/data/kemono/top.htm
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/105/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/105/h.php
- https://www.p-world.co.jp/machine/database/4698
- https://nana-press.com/post/1623897
- https://plaza.rakuten.co.jp/suropuro777/diaryall/

### 2021-10〜11境界
- https://crankyseven.com/newmachine-info.htm
- https://1geki.jp/newmachinecalender/202110/
- https://www.nikuziru.com/2021slot-list
- https://www.pidea.jp/articles/1629182526
