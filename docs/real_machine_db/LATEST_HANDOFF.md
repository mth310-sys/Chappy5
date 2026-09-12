更新日: 2026-09-12

## 現在地点
- recordCount: **1462**
- latestRecordAdded: **沖ワニマル-25 — No.1462**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-17_okiwanimaru-25.md`
- chronologicalFrontier: **2022-01-17**
- frontierLatestMachine: **沖ワニマル-25 — No.1462**
- schema: **resetBehavior v0.7**
- status: **2022-01-17_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1461「鬼浜爆走紅蓮隊 激闘謳歌編」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点のmainは recordCount 1461 / chronologicalFrontier 2022-01-11 / `2022-01-11_GROUP_CLOSED_3_OF_3_PROCESSED`。前チャット側の古い再開地点ではなく、main正本指定の2022-01-17「沖ワニマル」から継続。
- 25φ `SオキワニマルBA` と30φ `SオキワニマルAA-30` は別型式かつ公開初当り/機械割が異なるため独立レコード化する方針を確定。今回は25φをNo.1462として処理。

## No.1462 — 沖ワニマル-25
- path: `docs/real_machine_db/machines/2022-01-17_okiwanimaru-25.md`
- manufacturer: **バルテック**
- formalModel: **SオキワニマルBA**
- certificationNumber: **1S0755**
- releaseDate: **2022-01-17**
- generation/system: **6.1号機 / AT / 完全告知 / 擬似ボーナス / 25φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.6 / 100.5 / 102.7 / 104.2 / 106.2%**
- bonusInitialHit: **1G連除外合算 1/186 → 1/142**
- baseGamesPer50: **36.8 / 36.8 / 36.8 / 36.8 / 37.2 / 38.0G**
- netIncrease: **約7.0枚/G**
- basicPayout: **BIG約301枚 / REG約106枚**
- normalCeiling: **通常時約999G → BIG**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_RESET_WITH_INITIAL_HIT_SOURCE_CONFLICT**

### resetBehavior v0.7 — No.1462
- **設定変更 / 据え置き / 純電源OFF→ON**: 当時解析の朝一欄に天井・内部状態・ステージ等が「調査中」のまま残る。検索語・資料系統を変えて再探索したが、999G天井G・内部状態・有利区間の3者別契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **天井**: 通常時約999GでBIGは複数資料一致。設定変更専用の短縮天井は確認できないが、天井GがRESET/CARRY_OVERのどちらか自体を一般的6号機挙動から推測補完しない。
- **朝一公開数値**: **設定変更後1回目BIG終了時の上パネル設定示唆発生率50%**を確認し `numericResetData` に保存。
- **変更判別**: 朝一有利区間ランプ、ガックン、初期画面による直接判別は十分な再探索後も未固定。上パネル50%は設定変更後専用抽選だが、色変化の有無のみで変更確定とは扱わない。
- **25φ/30φ差**: 25φの初当りはP-WORLD / なな徹 / Slopachi-Quest / ちょんぼりすたが一致。HAZUSEの25φページは30φと同じ初当り値を掲載するため `CONFLICT` として保持し、多数一致の25φ専用値をcanonical採用。

## 2022-01-17群 — OPEN
1. **沖ワニマル-25 — No.1462 / DONE**
2. **沖ワニマル-30 — No.1463候補 / NEXT**

## 次回本線の再開地点
- **2022-01-17「沖ワニマル-30」＝No.1463候補**から開始。
- 30φは **SオキワニマルAA-30 / 検定番号1S0361** を候補として登録時に再照合する。
- 25φとは初当り・機械割、30φ固有の天井到達時BIG+裏モード等に差があるため、25φ値を流用せず30φ専用資料で性能コア＋resetBehaviorを独立確認する。
- No.1463処理後、2022-01-17群を新台カレンダー・別型式/PB/地域先行/延期まで再監査しCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存 `coreStatus: PARTIAL` は維持し、性能完了判定とreset QAを分離。
- RT「一本勝負」777G/200GとCZ構造、有利区間非該当は確認済み。一方、設定変更/据え置き/純電断時のRT/CZ残状態、成立済みボーナス/告知状態、本機固有ガックン/初期出目は直接契約を固定できず一般論で補完していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）**。Git追加履歴で日本松柔道部の直後に追加された実機レコードであることを確認済み。

## GitHub保存
- No.1462追加 commit: `8ddbefd29bc90a1c0e145d747a05e3085531d488`
- 嗚呼!我ら日本松柔道部 resetBehavior QA commit: `5f174fa0c2ce300812e9eb2f637b56d510991188`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1462 沖ワニマル-25
- https://www.p-world.co.jp/machine/database/9485
- https://nana-press.com/kaiseki/machine/220/
- https://nana-press.com/kaiseki/machine/220/7838/
- https://nana-press.com/kaiseki/machine/220/7843/
- https://nana-press.com/kaiseki/machine/220/7847/
- https://nana-press.com/kaiseki/machine/220/7850/
- https://www.slopachi-quest.com/article/okiwanimaru25-settei/
- https://www.slopachi-quest.com/article/okiwanimaru25-tenjou/
- https://chonborista.com/slot/baltec/151815/
- https://1geki.jp/slot/s_okiwanimaru25/3/
- https://hazuse.com/machine/pachislot/1S0755/
- https://ichikatsu.com/newslot2022/

### 遡及QA — 嗚呼!我ら日本松柔道部
- https://web-greenbelt.jp/00004919/
- https://hazuse.com/i/data/nihonmatujyudoubu/top.htm
- https://hazuse.com/i/data/nihonmatujyudoubu/bonus.htm
- https://hazuse.com/i/data/nihonmatujyudoubu/bonus_shousai.htm
- https://hazuse.com/i/data/nihonmatujyudoubu/rt.htm
- https://www.p-world.co.jp/machine/database/4501
- https://5goki.com/winnet
- https://nana-press.com/post/1559653
