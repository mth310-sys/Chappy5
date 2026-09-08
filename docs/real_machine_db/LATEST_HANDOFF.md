更新日: 2026-09-09

## 現在地点
- recordCount: **1071**
- latestRecordAdded: **SLOTアカギ～闇に降り立った天才～**（メーシー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-24_slot-akagi-yami-ni-oritatta-tensai.md`
- chronologicalFrontier: **2017-04-24**
- frontierLatestMachine: **SLOTアカギ～闇に降り立った天才～ — No.1071**
- schema: **resetBehavior v0.7**
- status: **2017-04-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1070「パチスロ獣王 王者の覚醒」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1070件 / chronologicalFrontier 2017-04-17 / 4/17群CLOSED**。
- HANDOFF指定の次未処理 **「SLOTアカギ～闇に降り立った天才～」** をNo.1071として登録。
- 4/24群はモゲスロ2017年カレンダー、2-9伝説系新台一覧、機種別導入日資料を横断。現調査ではアカギ以外の全国導入パチスロを固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH** とした。
- 4/25〜4/30境界では追加全国導入本線を固定できず。次の候補は「パチスロ マクロスフロンティア3」だが、**2017-05-01地域先行 / 2017-05-08本導入**の資料差があるため、次回canonical releaseDateをDB基準に沿って再固定してからNo.1072として処理する。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先したため今回は未更新。

## No.1071 — SLOTアカギ～闇に降り立った天才～
- manufacturer: **メーシー / UNIVERSAL ENTERTAINMENT group**
- releaseDate canonical: **2017-04-24**
- formalModelName: **SLOTアカギ／DA**
- certificationNumber: **6S1605**
- generation/system: **5号機 / 5.5号機 / A+ART / 周期抽選併用 / セット継続型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.3 / 99.8 / 102.1 / 106.8 / 110.5 / 119.2%**。
- ART初当たり: **1/391.7 / 361.6 / 320.0 / 288.9 / 240.1 / 191.8**。
- BIG: **1/606.8 / 606.8 / 606.8 / 546.1 / 546.1 / 455.1**。
- プレミアムボーナス「狂気の刻」: **全設定1/32768**。
- 50枚ベース: **約36G**。
- ART「鷲巣麻雀」: **単体約1.64枚/G、ボーナス込み約2.0枚/G、1セット平均約35G、継続率50〜80%**。
- 基本獲得: **BIG 204枚 / 狂気の刻 24枚**。
- 通常天井: **BIG＆ART間999Gで「決」へ移行し、5G後ART**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 周期RESET**。朝一通常ステージは **南郷ステージ**。
- 純電源OFF→ON: **天井CARRYOVER / 周期CARRYOVER**。通常は南郷ステージ開始。
- 電断ステージ例外: **電源OFFから4時間以内、または「凌ぎの刻」まで残り3G以下ではステージ引継ぎ**との当時解析あり。
- 据え置きの本機固有フル契約は独立資料で直接固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。純電断情報から機械的に転記していない。
- 設定変更専用の固定短縮天井、朝一専用モード振り分け、内部高確の公開初期振り分け、専用初当たり/CZ優遇数値は検索語・資料系統変更後も `NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH`。
- 通常時は1・4・7・10…の「3周期ごと+1」周期に進行優遇があるため、設定変更で1周期目へ戻ること自体は朝一挙動に関係するが、リセット専用追加抽選ではない。
- 本機固有ガックン、初期出目、ランプ等の確定変更判別は再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 前日G数/周期情報が判明していれば当日の進行から変更/据え置き推測材料になる。南郷ステージ単独は変更確定材料にならない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### data quality / conflicts
- 導入日はHAZUSE / K-Navi / パチビー / DMM / 複数解析で **2017-04-24**一致。
- 単一の当時スペック記事に「納期5月7日(日)〜」表記があるが、これは納期情報として分離し、全国導入canonicalを上書きしない。
- ART純増 **1.64枚/G（ART単体）** と **約2.0枚/G（ボーナス込み）** は定義差として分離。
- 据え置きと純電断を同一視せず、直接資料が不足する据え置きフル契約はUNVERIFIEDを維持。

## 2017-04-24群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み: **SLOTアカギ～闇に降り立った天才～ — No.1071**。
- モゲスロ2017カレンダーと2-9伝説系新台一覧はいずれも4/24をアカギのみ掲載。機種名・メーカー・導入日を変えた追加検索でも別の全国導入パチスロを固定できなかったためCLOSED。

## 2017-04-25〜05-08境界 / 次候補
- 4/25〜4/30に追加全国導入パチスロ本線を現調査で固定できず。
- **パチスロ マクロスフロンティア3**は次未処理候補だが導入日の定義差あり:
  - 2-9伝説系カレンダー: **2017-05-01**。
  - パチナビ: **2017-05-08導入**、ただし「関東圏などは5月1日」。
  - ちょんぼりすた: **2017-05-08（関東圏などは5月1日）**。
  - 当時解析資料にも5/8導入開始予定が存在。
- したがって **5/1地域先行 vs 5/8本導入**をCONFLICT/定義差として保持し、次回DBのreleaseDate canonical基準に照らして固定する。機種自体は飛ばさずNo.1072候補の先頭に置く。
- 5/8群では少なくとも **サクラ大戦～熱き血潮に～ / 呪怨 / 忍魂 ～暁ノ章～ / ラッキーベガス**も候補として確認済み。マクロスF3を処理する前に飛ばさない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。
- 新規本線と並行して後続QA時に継続する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1071を再取得。
2. **1071件 / chronologicalFrontier 2017-04-24 / 4/24群CLOSED** を正本として継続。
3. 4/25〜4/30境界を最終確認。
4. 次未処理 **「パチスロ マクロスフロンティア3」** の **5/1地域先行 vs 5/8本導入**を一次・業界・当時解析で再照合し、canonical releaseDateを固定してNo.1072として処理。
5. その後、canonical日付の同日群を全メーカー横断監査する。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1071 SLOTアカギ～闇に降り立った天才～
- HAZUSE: https://hazuse.com/machine/pachislot/6S1605/
- K-Navi: https://p-kn.com/slot/2771/
- パチビー: https://www.pachibee.jp/machines/index/217030008
- DMMぱちタウン: https://p-town.dmm.com/machines/2834/recommend
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/35172/
- スロット解析情報～すろかい～: https://slotkaiseki.hatenablog.com/entry/akagi
- スロパチクエスト: https://www.slopachi-quest.com/article/akagi-yami/
- P-WORLD: https://www.p-world.co.jp/machine/database/8339
- パチンコ・パチスロ.com 当時スペック記事: https://pachinkopachisro.com/archives/49744501.html

### 4/24群 / 次境界
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017
- 2-9伝説系新台一覧: https://29den.com/newslot/
- パチナビ マクロスフロンティア3: https://www.pachinavi.jp/machine/slot/434/
- ちょんぼりすた マクロスフロンティア3: https://chonborista.com/slot/sankyo-slot/36047/
