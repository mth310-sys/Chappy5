更新日: 2026-09-09

## 現在地点
- recordCount: **1073**
- latestRecordAdded: **パチスロサクラ大戦～熱き血潮に～**（Sammy / サミー株式会社）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_sakura-taisen-atsuki-chishio-ni.md`
- chronologicalFrontier: **2017-05-08**
- frontierLatestMachine: **パチスロサクラ大戦～熱き血潮に～ — No.1073**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1072「パチスロ マクロスフロンティア3」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1072件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN**。
- 次未処理「パチスロサクラ大戦～熱き血潮に～」をNo.1073として登録。
- サミー公式で商品名・2017年5月上旬全国稼働予定を確認。パチビー/K-Navi/HAZUSE/複数解析で導入日2017-05-08一致。HAZUSEで型式「パチスロサクラ大戦 熱き血潮に／XR」、検定番号6S1598を確認。
- 性能コア: 機械割97.9/98.8/100.7/103.7/107.8/111.5%、ART初当たり1/394.1/381.9/363.4/330.4/293.5/271.7、約44G/50枚、ART純増約2.0枚/G。
- 天井は固定GではなくART間好感度MAX10回。設定変更時は5回50%/9回50%へ短縮。好感度は内部再セットされ、1～55各1.2%、56～99各0.8%、平均約45%相当。
- 純電源OFF→ONでは好感度MAX回数天井と内部好感度を引き継ぎ、見た目上の好感度表示は0%へ戻る。
- 設定変更/純電断後の内部状態は十分な再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。液晶は後発解析で劇場ステージ、一撃2017-05-31時点は調査中のためPUBLICATION_TIME_DIFFERENCEとして保持。
- ガックンは変更推測材料だが対策可能としてPOSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC。
- 有利区間はNOT_APPLICABLE_5TH_GEN_PRE_5_9。
- 2017-05-08群には少なくとも **パチスロ 呪怨 / 忍魂 ～暁ノ章～ / ラッキーベガス** が未処理候補として残るため群はOPEN。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先し今回は未更新。

## No.1073 — パチスロサクラ大戦～熱き血潮に～
- manufacturer: **Sammy / サミー株式会社**
- releaseDate: **2017-05-08**
- formalModelName: **パチスロサクラ大戦 熱き血潮に／XR**
- certificationNumber: **6S1598**
- generation/system: **5号機 / 5.5号機 / ART特化 / CZ / 好感度メーター管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.9 / 98.8 / 100.7 / 103.7 / 107.8 / 111.5%**。
- ART初当たり: **1/394.1 / 381.9 / 363.4 / 330.4 / 293.5 / 271.7**。
- 50枚ベース: **約44G**。
- ART「帝撃ラッシュ」純増: **約2.0枚/G**。
- 初回ART: **30G+α+敵将バトル6G**。2セット目以降20/30/40G+α+敵将バトル。
- 通常天井: **好感度MAX10回でART**。

### resetBehavior v0.7
- 設定変更: 好感度MAX回数天井RESET、**5回50% / 9回50%**へ再抽選。
- 5回≈600G、9回≈1080Gは解析上の平均目安であり固定G天井ではない。
- 好感度: 見た目0%だが内部再抽選。**1～55各1.2%、56～99各0.8%、平均約45%相当**。
- 純電源OFF→ON: 天井回数進捗CARRYOVER / 内部好感度CARRYOVER / 表示好感度0%。
- 据え置きフル契約: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。純電断情報から自動転記していない。
- 内部状態: 設定変更/純電断とも `UNVERIFIED_AFTER_RESEARCH`。
- 液晶ステージ: 後発解析=劇場ステージ、一撃2017-05-31時点=調査中。`PUBLICATION_TIME_DIFFERENCE_VISIBLE_STAGE`。
- ガックン: `POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-08群監査
- status: **OPEN**。
- 登録済み: **パチスロ マクロスフロンティア3 — No.1072 / パチスロサクラ大戦～熱き血潮に～ — No.1073**。
- 次未処理候補:
  1. **パチスロ 呪怨**（藤商事）
  2. **忍魂 ～暁ノ章～**（大都技研）
  3. **ラッキーベガス**（導入日/メーカーを別系統資料で再固定してから処理）
- 5/8群はまだCLOSEDにしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1073を再取得。
2. **1073件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN** を正本として継続。
3. 次未処理 **「パチスロ 呪怨」** をNo.1074候補として性能コア+resetBehavior v0.7まで処理。
4. その後 **忍魂 ～暁ノ章～ → ラッキーベガス** を漏れなく確認。
5. 5/8群の全メーカー横断監査後にCLOSED判定し、次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1073 パチスロサクラ大戦～熱き血潮に～
- サミー公式: https://www.sammy.co.jp/japanese/news/2017/658.html
- パチビー: https://www.pachibee.jp/machines/index/217040000
- HAZUSE: https://hazuse.com/machine/pachislot/6S1598/
- K-Navi: https://p-kn.com/slot/2750/
- 一撃: https://1geki.jp/slot/s_sakura_taisen_atsuki/ / https://1geki.jp/slot/s_sakura_taisen_atsuki/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/34601/
- パチスロデータ: https://pachislo-data.com/sammy/33931
- すろぱちくえすと: https://www.slopachi-quest.com/article/sakurataisen4/

### 次候補 / 5月8日群
- パチビー 呪怨: https://www.pachibee.jp/machines/about/217040001
- HAZUSE 呪怨: https://hazuse.com/machine/pachislot/6S1567/genre/207/
- パチビー 忍魂 ～暁ノ章～: https://www.pachibee.jp/machines/about/217040006
- K-Navi 忍魂 ～暁ノ章～: https://p-kn.com/slot/2774/
