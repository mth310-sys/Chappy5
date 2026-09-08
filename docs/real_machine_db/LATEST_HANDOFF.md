更新日: 2026-09-09

## 現在地点
- recordCount: **1070**
- latestRecordAdded: **パチスロ獣王 王者の覚醒**（Sammy / サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-17_juuou-ouja-no-kakusei.md`
- chronologicalFrontier: **2017-04-17**
- frontierLatestMachine: **パチスロ獣王 王者の覚醒 — No.1070**
- schema: **resetBehavior v0.7**
- status: **2017-04-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1069「パチスロ おそ松くん」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1069件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN**。
- HANDOFF指定の次未処理 **「パチスロ獣王 王者の覚醒」** をNo.1070として登録。
- 4/17群は一撃2017年4月カレンダー、モゲスロ2017年カレンダー、2-9伝説系新台一覧、導入日順2017年一覧を再監査。カレンダー間で掲載欠落はあるが、複数系統を合わせると登録済み4機（キン肉マン / 鬼浜 / おそ松くん / 獣王）以外の全国導入パチスロを固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH** とした。
- 2017-04-18〜04-23境界を検索し、次の全国導入本線として **2017-04-24「SLOTアカギ～闇に降り立った天才～」** を複数資料で確認。次候補No.1071とする。
- 遡及reset QAカーソルは前回の `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先したため今回は同レコードを未更新。

## No.1070 — パチスロ獣王 王者の覚醒
- manufacturer: **Sammy / サミー**
- releaseDate canonical: **2017-04-17**
- formalModelName: **獣王 王者の覚醒／ZA**
- certificationNumber: **6S1203**
- generation/system: **5号機 / 5.5号機 / A+ART / ゲーム数上乗せ型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.0 / 98.8 / 101.0 / 105.4 / 109.6 / 116.0%**。一撃、ちょんぼりすた、pachislo-data、PiDEA、5号機クロニクルで一致。
- ART初当たり canonical: **1/588.0 / 575.3 / 519.8 / 456.5 / 385.0 / 331.2**。
- BIG: **1/420.1 / 420.1 / 420.1 / 409.6 / 407.1 / 394.8**。
- REG: **1/655.4 / 642.5 / 630.2 / 606.8 / 595.8 / 504.1**。
- 50枚ベース: **約30G**。解析精密値 **30.0〜30.3G/50枚**。
- ART「サバンナチャンス」: **単体約1.4枚/G、ボーナス込み約1.9枚/G、初回50G以上**。
- 基本獲得: **BIG 204枚 / REG 48枚 / 象BONUS 18枚**。
- 通常天井: **ボーナス間999GでART**。ARTを挟んでも天井進捗はリセットされない。

### resetBehavior v0.7
- 設定変更: **ボーナス間天井RESET / 内部状態RESELECT / REG連状態RESELECT**。
- 純電源OFF→ON: **天井・内部状態CARRYOVER**。
- 据え置き: 前日ボーナス間G数の宵越しCARRYOVERを確認。内部状態・REG連状態を据え置き列で直接固定した独立資料は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時天井振り分け: **299G 25% / 599G 25% / 999G 50%**。合計50%で599G以下の明確な朝一短縮恩恵。
- 設定変更時REG連状態: **0連50% / 1〜5連各5% / 6連25%**。6連状態選択後に朝一REGを引けば当時解析上REG7連目扱いとなりART確定。
- 朝一ステージは当時解析が **調査中**。推測で固定していない。
- 本機固有ガックン・初期出目・ランプ等の確定変更判別は検索語と資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 299G/599G天井発動は設定変更時短縮を強く示すが、999G選択は変更時にも50%あるため非確定。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### identity / conflict
- サミー公式2017-02-15リリースは「4月中旬より全国稼働予定」。
- 2017-04-05のサミーネットワークス公式も「導入前」「4月中旬導入予定」と記載。
- HAZUSE / パチビー / 一撃 / K-Navi / アタリ7は **2017-04-17** で一致しcanonical採用。
- 単一の2017-02-24業界試打ブログには **「稼動開始日：4月3日～」** とあるため削除せず `CONFLICT_RELEASE_DATE_SINGLE_PREVIEW_BLOG_2017_04_03_VS_OFFICIAL_MID_APRIL_AND_MULTI_SOURCE_2017_04_17` として保持。4/5時点公式関連資料がまだ導入前としているため4/3を全国導入日には採用しない。

## 2017-04-17群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  1. **パチスロ キン肉マン ～夢の超人タッグ編～ — No.1067**
  2. **鬼浜爆走紅蓮隊 愛情恋歌編 — No.1068**
  3. **パチスロ おそ松くん — No.1069**
  4. **パチスロ獣王 王者の覚醒 — No.1070**
- 一撃2017年4月カレンダーは4/17を獣王・キン肉マンの2機のみ掲載する一方、モゲスロと2-9伝説系は4機を掲載。単一カレンダーの欠落を前提に横断した結果、追加第5候補を固定できずCLOSED。
- すろぱちくえすとの2017導入日一覧はキン肉マンを4/3側に置く資料差があるが、既存No.1067側の導入日根拠を本handoffで再編集しない。4/17群監査ではモゲスロ/2-9伝説および既存正本を優先し、資料差があることだけ注意事項として残す。

## 2017-04-18〜04-23境界 / 次候補
- 現時点の横断検索で追加全国導入パチスロを固定できず、次の明確な導入日は **2017-04-24**。
- 次候補: **SLOTアカギ～闇に降り立った天才～**（メーシー）。
- 先行確認:
  - releaseDate: **2017-04-24**（K-Navi / DMMぱちタウン / HAZUSE / 2017導入日一覧で一致）
  - formalModelName: **SLOTアカギ／DA**
  - certificationNumber: **6S1605**
  - system: **5号機 A+ART**
  - 機械割: **98.3〜119.2%**
- 次回は性能コアとresetBehavior v0.7を最初から収集・照合すること。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。
- ルーニー・テューンズBIAは既存レコードにresetBehavior PARTIALがあるため、RT残G/内部RT状態の設定変更・据え置き・純電断契約を資料系統変更で再探索し、既存 `status: PARTIAL` は性能側として不用意に変更しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1070を再取得。
2. **1070件 / chronologicalFrontier 2017-04-17 / 4/17群CLOSED** を正本として継続。
3. 2017-04-18〜04-23境界を最終確認し、次未処理 **「SLOTアカギ～闇に降り立った天才～」** をNo.1071候補として処理。
4. 4/24群を全メーカー横断監査し、同日漏れを確認する。
5. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1070 パチスロ獣王 王者の覚醒
- サミー公式: https://www.sammy.co.jp/japanese/news/2017/642.html
- サミーネットワークス公式: https://www.sammy-net.jp/news/2017/05/-777town777next-1.html
- サミーネットワークス公式（4/5導入前資料）: https://www.sammy-net.jp/news/2017/04/post-55.html
- HAZUSE: https://hazuse.com/machine/pachislot/6S1203/
- パチビー: https://www.pachibee.jp/machines/about/217030006
- 一撃: https://1geki.jp/slot/s_jyuuou_ohja/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/33751/
- pachislo-data: https://pachislo-data.com/sammy/33948
- PiDEA: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%8D%A3%E7%8E%8B%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- アタリ7: https://www.atari7.com/slot/date1487913620.php
- 単一4/3表記資料: https://ameblo.jp/kojitukekun/entry-12250694833.html

### 4/17群監査
- 一撃2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017
- 2-9伝説系新台一覧: https://29den.com/newslot/
- すろぱちくえすと2017導入日一覧: https://www.slopachi-quest.com/article/2017-sindai/

### 次候補 SLOTアカギ
- K-Navi: https://p-kn.com/slot/2771/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1605/
- DMMぱちタウン: https://p-town.dmm.com/machines/2834/recommend
