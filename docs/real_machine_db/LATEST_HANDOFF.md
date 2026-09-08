更新日: 2026-09-08

## 現在地点
- recordCount: **1018**
- latestRecordAdded: **プリシラと魔法の本**（NET）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-17_priscilla-and-the-magic-book.md`
- chronologicalFrontier: **2016-10-17**
- frontierLatestMachine: **プリシラと魔法の本 — No.1018**
- schema: **resetBehavior v0.7**
- status: **2016-10-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2016-10-18_TO_2016-10-23**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1017実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。既存性能値はやり直していない。
- main正本は **1017件 / chronologicalFrontier 2016-10-17 / 10/17群OPEN** から継続。
- handoff先頭候補 **プリシラと魔法の本**をGitHub内検索し、既存レコードなしを確認してNo.1018として追加。
- 10/17群を導入日一覧・メーカー/業界・当時解析の表記を変えて再監査。現時点で全国導入本線として固定できる未登録追加機は確認できず、既登録 **メタルギア ソリッド スネークイーター / プリシラと魔法の本** の2機で **2016-10-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 次境界10/18〜10/23を監査後、10/24群へ進む。少なくともアクロス **クランキーセレブレーション** はK-Navi・当時解析で2016-10-24導入を確認済み。

## No.1018 — プリシラと魔法の本
- manufacturer: **NET / ネット株式会社**
- releaseDate: **2016-10-17**
- formalModelName: **プリシラと魔法の本／NB**
- certificationNumber: **6S0688**
- generation/system: **5号機 / 5.5号機期 / A+ART / 純ボーナス+疑似ボーナスART / 周期抽選型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### identity / performanceCore
- NET公式プレスリリースで2016-10-17全国導入を確認。HAZUSEで型式 `プリシラと魔法の本／NB`、検定 `6S0688` を固定。
- 機械割: **97.6 / 98.6 / 100.0 / 103.4 / 106.5 / 110.1%**。
- クロノボーナス: **全設定1/252**。
- プリシラBIG: **1/443 / 424 / 397 / 348 / 306 / 263**。
- プリシラREG canonical: **1/672 / 643 / 602 / 527 / 464 / 399**。
- 合成初当たり: **1/129 / 126 / 122 / 114 / 106 / 97**。
- 50枚ベース: **約33.6G**。
- ART基礎純増: **約1.8枚/G**、リアルボーナス込み実効表記 **約2.0枚/G**。
- クロノボーナス約102枚、プリシラBIG平均約120枚、プリシラREG平均約90枚。

### resetBehavior v0.7
- 設定変更: **天井周期RESET / RT状態RESET / 専用天井周期テーブル / ロング周期クリアポイント優遇**。
- 据え置き: **天井周期・RT状態CARRYOVER**。
- 純電源OFF→ON: **天井周期・RT状態CARRYOVER**。設定変更と純電断を分離。
- 時計役物は設定変更・据え置き/純電断ともランダムスタートで、時計位置による変更判別は不可。
- リールガックンも当時解析で変更判別不可。
- 液晶ステージは設定変更時「街」開始が実戦上報告。据え置き/純電断側は十分な再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 天井 / 公開朝一数値
- 通常最大天井: **ロング周期6周期**。理論約864G、HAZUSE約870G、実カウンタ上はクロノボーナス等の影響で約900〜1000G付近になり得る。定義差として分離。
- 設定変更後最大天井: **5周期**。
- 設定変更時天井周期振り分け（全設定共通）:
  - 2周期 **6.25%**
  - 3周期 **10.16%**
  - 4周期 **18.75%**
  - 5周期 **64.84%**
  - 1/6周期は選択なし。
- 設定変更時ロング周期の規定クリアポイントは **最大30pt**（通常最大40pt）。平均は設定1→6で **28.6 / 28.4 / 28.1 / 27.5 / 26.9 / 26.0pt**。
- ただしクリアポイント優遇が初回周期のみか疑似ボーナス当選まで継続するかは当時資料でも未確定のため **UNVERIFIED_AFTER_RESEARCH**。

### conflict / quality
- 設定1プリシラREGはHAZUSE・期待値見える化・ピロ式で **1/672** が一致。一方すろぱちくえすとの機種まとめ本文一箇所に **1/682** があるため `CONFLICT_SETTING1_PRISCILLA_REG_1_672_VS_1_682`。複数一致の1/672をcanonicalとし平均しない。
- ART 1.8枚/G vs 2.0枚/Gは、基礎ART純増とリアルボーナス込み実効純増の定義差として分離し、数値競合扱いしない。

## 2016-10-17群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **メタルギア ソリッド スネークイーター**（KPE）— No.1017
- **プリシラと魔法の本**（NET）— No.1018

現時点の全メーカー再監査で、追加の全国導入本線を固定できず群をCLOSED。

## 次回候補 / 境界
1. **2016-10-18〜10-23** を導入日一覧、メーカー/業界記事、型式名で再監査。未登録全国導入機があれば先に処理。
2. 境界に追加がなければ **2016-10-24群**へ前進。
3. 10/24先頭確認済み候補: **クランキーセレブレーション**（アクロス）。K-Navi・当時解析で2016-10-24ホール導入開始を確認。
4. 10/24同日群も全メーカー横断して未登録機を洗い、群単位でCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1018を再取得。
2. **1018件 / chronologicalFrontier 2016-10-17 / 10/17群CLOSED** を正本として継続。
3. **10/18〜10/23境界監査**を行い、未登録機がなければ10/24群へ進む。
4. 10/24群では **クランキーセレブレーション**を先頭候補に重複確認後、性能コア + resetBehavior v0.7を収集。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替えて十分な再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1018 プリシラと魔法の本
- NET株式会社公式プレスリリース（発売決定）: https://www.dreamnews.jp/press/0000137366
- NET株式会社公式プレスリリース（10/17全国導入）: https://www.dreamnews.jp/press/0000140322
- HAZUSE: https://hazuse.com/machine/pachislot/6S0688/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S0688/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S0688/genre/207/
- HAZUSE ART/周期: https://hazuse.com/machine/pachislot/6S0688/genre/209/
- K-Navi: https://p-kn.com/slot/2612/
- グリーンべると: https://web-greenbelt.jp/00008920/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/purisira/
- すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/purisira-reset/
- 期待値見える化: https://slotjin.com/zone/priscilla/
- ピロ式パチスロ記: https://piro-shiki.com/purishira-kaiseki/
- P-WORLD: https://www.p-world.co.jp/machine/database/8110

### 次候補 クランキーセレブレーション
- K-Navi: https://p-kn.com/slot/2627/
- ピロ式パチスロ記: https://piro-shiki.com/cranky-celebration-kaiseki/
