更新日: 2026-09-13

## 現在地点
- recordCount: **1510**
- latestRecordAdded: **パチスロ FAIRY TAIL2 — No.1510**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-08-01_pachislot-fairy-tail2.md`
- chronologicalFrontier: **2022-08-01**
- frontierLatestMachine: **パチスロ FAIRY TAIL2 — No.1510**
- schema: **resetBehavior v0.7**
- status: **2022-08-01_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1508 `パチスロ鉄拳5` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- No.1509 `S黄門ちゃま喝2`、No.1510 `パチスロ FAIRY TAIL2` を性能コア＋resetBehavior v0.7で追加。
- Greenbelt/P-WORLD 2022-08-01新台スケジュール、複数2022年新台カレンダーを横断し、8/1パチスロ群はこの2機で一致。地域差・別型式・延期/PB候補も再検索し、現時点で `CLOSED`。
- 既存No.1508以前の性能値は再収集せず、未処理本線だけを前進。

## No.1509 — S黄門ちゃま喝2
- path: `docs/real_machine_db/machines/2022-08-01_s-komon-chama-katsu2.md`
- manufacturer: **オリンピア / 平和**
- formalModel: **S黄門ちゃま喝2L1**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-08-01**
- generation/system: **6.5号機 / AT**
- payoutRate: **97.5 / 98.5 / 101.2 / 104.9 / 107.3 / 108.1%**
- AT初当り: **1/239.6 → 1/195.7**
- baseGamesPer50: **約34G/50枚**
- netIncrease: **約2.5枚/G**
- basicPayout: **AT初期30G+α、印籠チャンスで上乗せ**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_DIRECT_RESET_NUMBERS**
- confidence: **HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1509
- **設定変更**: 天井RESET、朝一専用モードへ移行。内部状態RESET。
- **据え置き**: 内部310ptを引継ぎ。見た目は0ptでも内部ポイントは保持され得る。
- **純電源OFF→ON**: 天井・内部状態引継ぎ。ステージ表示契約は未固定。
- **ゲーム数/天井**: 通常500G以降の印籠箱MAX→AT。設定変更時は350G以降の印籠箱MAX→AT。
- **モード**: 通常 / チャンス / 朝一（設定変更）。
- **有利区間**: 設定変更時は新有利区間。有利区間ランプ非搭載。
- **朝一恩恵**: 350G短縮。印籠箱MAX（W含む）時のAT当選率は全設定共通55.1%。朝一10G付近の喝ゾーン期待度約40%とする解析あり。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 10G付近喝ゾーンは変更期待度アップ材料。ランプ不可。固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 350G / 55.1% / 10G喝ゾーン約40%。
- `2Sxxxx`形式の検定番号は型式名・メーカー・公安委員会・保通協・検定番号の検索語を変えて再探索したが固定できず推測していない。

## No.1510 — パチスロ FAIRY TAIL2
- path: `docs/real_machine_db/machines/2022-08-01_pachislot-fairy-tail2.md`
- manufacturer: **藤商事**
- formalModel: **S FAIRY TAILXX FA**
- inspectionCode: **2S0350**
- releaseDate: **2022-08-01**
- generation/system: **6.5号機 / 差枚数管理型AT**
- payoutRate: **97.5 / 98.5 / 100.1 / 105.0 / 107.2 / 110.1%**
- CZ: **1/242.1 → 1/187.1**
- AT: **1/459.3 → 1/273.6**
- baseGamesPer50: **約32.9G/50枚**
- netIncrease: **索敵約0.6枚/G / バトル約3.2枚/G**
- basicPayout: **AT初当り期待値約620枚OVER / 魔竜決戦平均獲得期待値約3,000枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_DIRECT_MODE_BENEFIT**
- confidence: **OFFICIAL_HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1510
- **設定変更**: 有利区間・天井RESET、内部モード再抽選。
- **据え置き**: 天井・内部モード・有利区間引継ぎ。
- **純電源OFF→ON**: 同じくCARRY_OVER。
- **ゲーム数天井**: 1536G+α。到達後CZ失敗時は特殊モード→次回100ptでAT。
- **モード**: 通常 / チャンス / 天国 / 特殊。設定変更時およびAT終了後は約55%でチャンス以上。
- **モード別pt天井**: 777 / 500 / 300 / 100pt（平均約474 / 292 / 158 / 39G）。
- **有利区間**: 設定変更時・AT終了後RESET。有利区間ランプ非搭載。
- **朝一恩恵**: 固定G数短縮ではなく約55%チャンス以上というモード優遇。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: ランプ不可。固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## 2022-08-01群 — CLOSED 2/2
1. `S黄門ちゃま喝2` — **No.1509 処理済み**
2. `パチスロ FAIRY TAIL2` — **No.1510 処理済み**

横断監査:
- Greenbelt/P-WORLD 2022-08-01新台スケジュール: パチスロ欄は黄門ちゃま喝 / FAIRY TAIL2。
- CrankySeven 2022導入予定一覧も8/1を同2機で掲載。
- パチ7 6.5号機一覧も8/1を同2機で掲載。
- 現時点で追加独立型式/PB/地域先行機は確認できずCLOSED。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線8/1群を2機処理してCLOSED監査まで進めたため、遡及QAカーソルは変更しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）**。

## 次回本線の再開地点
- **2022-08-02〜08-07境界監査 → 2022-08-08群。**
- 現時点の先頭候補: **No.1511候補 `パチスロ 新鬼武者2`**。
- 同日既知候補: **パチスロ 新鬼武者2 / 政宗 戦極**。複数新台カレンダーで一致しているが、処理前にPB・地域先行・延期・別型式を再監査する。

## GitHub保存
- No.1509追加 commit: `6a725229390ceb028954d443a59c19a7f8d33409`
- No.1510追加 commit: `7aa5bb4aced480fba2daa309865ff84470f45bde`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1509 S黄門ちゃま喝2
- https://news.p-world.co.jp/articles/20733/nippon
- https://news.p-world.co.jp/articles/21319/greenbelt
- https://web-greenbelt.jp/post-60731/
- https://www.p-world.co.jp/machine/database/9660
- https://p.hisshobon.jp/machine/3931/1/89345
- https://1geki.jp/slot/s_komonkatsu2/
- https://1geki.jp/slot/s_komonkatsu2/45/
- https://slot-seven.com/skm7-tenzyou/
- https://2-9densetsu.com/chama2/
- https://ichikatsu.com/chamakatsu2/

### No.1510 パチスロ FAIRY TAIL2
- https://www.fujimarukun.co.jp/products/s_fairytail2/
- https://yugi-nippon.com/pachinko-new-machine/post-52097/
- https://news.p-world.co.jp/articles/21262/nippon
- https://hazuse.com/machine/pachislot/2S0350/
- https://1geki.jp/slot/s_fairytail2/
- https://1geki.jp/slot/s_fairytail2/3/
- https://www.slopachi-quest.com/article/fairytail2-tenjou/
- https://flick7.net/slot/fairytail2__k.php
- https://nana-press.com/kaiseki/machine/396/10666/

### 2022-08-01群監査 / 次群
- https://news.p-world.co.jp/articles/21319/greenbelt
- https://crankyseven.com/newmachine-info.htm
- https://pachiseven.jp/articles/detail/15945
