更新日: 2026-09-11

## 現在地点
- recordCount: **1373**
- latestRecordAdded: **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-11-02_g1-fairy-grand-prix.md`
- chronologicalFrontier: **2020-11-02**
- frontierLatestMachine: **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373**
- schema: **resetBehavior v0.7**
- status: **2020-11-02_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1372「回胴黙示録カイジ～沼～」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 直前handoffの指定どおり2020-10-20～11-01境界を確認し、11/02群の先頭 **「～ガールズケイリン～GⅠフェアリーグランプリ」** を **No.1373** として追加。
- 11/02群は既知4機のうち1機処理済み。残り3機を順番に処理後、全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。

## No.1373 — ～ガールズケイリン～GⅠフェアリーグランプリ
- path: `docs/real_machine_db/machines/2020-11-02_g1-fairy-grand-prix.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **SGⅠフェアリーグランプリKP**
- certificationNumber: **0S0606**
- releaseDate: **2020-11-02**
- generation/system: **6号機 / 周期抽選+CZ / G数管理AT / 擬似ボーナス / 有利区間管理**
- 出玉率: **97.4 / 98.8 / 100.7 / 104.3 / 106.1 / 108.0%**
- CZ初当たり: **1/199 / 1/198 / 1/197 / 1/196 / 1/195 / 1/194**
- AT初当たり: **1/924 / 1/875 / 1/789 / 1/682 / 1/631 / 1/573**
- base: **約52G/50枚**
- netIncrease: **メインAT約2.6枚/G / 擬似ボーナス・完走後一部区間約4.0枚/G**
- AT期待獲得: **約700枚**。GK BONUS 20～100G・約80～400枚、PREMIUM GK BONUS 10G・約40枚。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CORE_RESET_CONTRACT**

### resetBehavior v0.7 — No.1373
- 設定変更: **天井RESET / 有利区間RESET**。朝一は神社ステージ開始。
- 純電源OFF→ON: **天井CARRY_OVER / 有利区間CARRY_OVER**。液晶は設定変更時と同じく神社ステージ開始。
- 据え置き独立契約は、純電断と同義と推定せず **UNVERIFIED_AFTER_RESEARCH**。
- ゲーム数天井: **有利区間移行後499G+αでCZ**。
- 周期天井: **最大8周期**。有利区間開始時振り分けは **1周期1.2 / 2周期0.4 / 3周期25.0 / 4周期0.4 / 5周期1.2 / 6周期0.4 / 7周期25.0 / 8周期46.5%**。これは設定変更専用値ではなく有利区間開始時共通値。
- 8周期目到達はAT当選まで確約する解析あり。
- 1周期目はCZ当選率/予選突破率約30%以上という公開解析あり。ただし朝一専用値ではない。
- 設定変更専用の固定短縮天井・専用モード振り分け・専用初当たり優遇は確認できず。
- 朝一は設定変更/電断とも神社ステージのため、液晶単独では変更判別不可。
- 有利区間ランプ位置はPAYOUT右下ドット。通常時ランプ契約を用いた確定的な変更判別、本機固有ガックン、内部育成状態/保留等の完全引継ぎは再探索後も **UNVERIFIED_AFTER_RESEARCH**。

## identity / 型式メモ
- `SGIフェアリーグランプリKG` / 検定番号 `0S0499` が先行して検定通過。
- 後に `SGⅠフェアリーグランプリKP` / `0S0606` が検定通過し、2020年11月の実店舗・流通資料でKPを確認。
- 市場導入型式はKPをcanonical、KGは先行検定型式として保持。

## 2020-11-02群監査 — OPEN
既知キュー:
1. **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373 処理済み**
2. **パチスロ七つの大罪 — No.1374候補**
3. **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド**
4. **華祭**

4機処理後、2020-11-02同日について全メーカー・別型式・別スペック・PB・地域差・延期機を再監査し、CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。reset側 `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## 次回本線の再開地点
- 最新main再同期後、**No.1374候補「パチスロ七つの大罪」** から継続。
- その後 **「パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド」→「華祭」** の順で処理。
- 3機処理後、2020-11-02群の全メーカー・別型式・別スペック・PB・地域差・延期機を横断監査してCLOSED判定する。

## GitHub保存
- No.1373追加 commit: `7f1b47d48a447b0e16ae6c451f1f6c66f3de8f0b`
- 直前No.1372追加 commit: `3a276d37499504c4ed7f8da5becfc3a7b0113bf0`
- No.1371遡及追加 commit: `12415ed37ef7d8d9a70faa0feeff6cc3b8e6d3d5`

## 主要出典 — 取得日 2026-09-11
### No.1373 ～ガールズケイリン～GⅠフェアリーグランプリ
- 遊技通信web / 検定通過: https://www.yugitsushin.jp/news/maker/20200908-1435kentei/
- P-WORLD / 遊技日本 業界ニュース: https://news.p-world.co.jp/articles/15133/nippon
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9246
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/119531/
- 1geki: https://1geki.jp/slot/s_gk_g1fg/3/
- 期待値見える化だくお: https://note.com/dakuo_slot/n/n7834ecd79f17
- パチ7 通常時解析: https://pachiseven.jp/machines/6151/cutout/6
- ぱちんこキュレーション: https://pachinko-curation.com/13070/
- SLOT HACK: https://slothack.net/matome/14856/
- PiDEA X: https://www.pidea.jp/articles/1599546573

### 直前No.1372 回胴黙示録カイジ～沼～
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/14326/greenbelt
- パチビー: https://www.pachibee.jp/machines/index/220020002
- HAZUSE: https://hazuse.com/machine/pachislot/9S1396/
- 必勝本: https://p.hisshobon.jp/machine/3496/1/77019
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/106156/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/kaijinuma/
- 1gekiモード: https://1geki.jp/slot/s_kaiji_numa/44/

### 11/02群監査
- 1geki 2020年11月導入カレンダー: https://1geki.jp/newmachinecalender/202011/
