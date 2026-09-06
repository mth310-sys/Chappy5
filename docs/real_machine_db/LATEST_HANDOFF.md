# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **821**
- latestRecordAdded: **麻雀格闘倶楽部**（KPE）— 2014-05-26
- latestRecord: `docs/real_machine_db/machines/2014-05-26_mahjong-fight-club.md`
- chronologicalFrontier: **2014-05-26**
- frontierLatestMachine: **麻雀格闘倶楽部**
- schema: **resetBehavior v0.7**
- status: **2014-05-26_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、直前レコード `docs/real_machine_db/machines/2014-05-26_b-max.md` を再読。
- INDEXは旧集約状態のため、README規定に従いLATEST_HANDOFFと実レコードを進捗正本として継続。
- 作業開始時の正本は **820件 / 2014-05-26 / 05-26_GROUP_OPEN**。
- handoff指定の次の未処理 **麻雀格闘倶楽部（KPE）— 2014-05-26** が未登録であることをmain検索で再確認し、821件目として追加。

## 今回追加 — 麻雀格闘倶楽部

### identity / 性能コア

- manufacturer: **KPE**。
- formalModelName: **麻雀格闘倶楽部KK**。2014-02-24検定通過記事で確認。
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**。型式名・メーカー・検定通過日・シリーズ名を変えて再探索したが今回安全に固定できず。
- hall start: **2014-05-26**。K-Navi全国一斉導入カレンダーを時系列キーに採用。グリーンべるとは2014-04-22記事で5月25日納品開始と報道。
- generation/system: **5号機 / ART / 周期抽選 / CZ**。
- ART初当たり: **1/226.3 / 193.9 / 219.0 / 179.3 / 200.8 / 161.6**。
- payout: **97.1 / 98.5 / 100.2 / 104.5 / 108.1 / 113.2%**。
- baseGamesPer50: **約30.0G/50枚**（パチマガスロマガ設定1独自調査値）。
- ART「格闘倶楽部RUSH」: **純増約2.0枚/G / 初期30〜480G**。
- 通常1周期: **約30G+α**。
- 最大天井: **33周期**。約990Gは周期長からの目安であり固定G数天井とは扱わない。
- 5 / 11 / 22周期は天井候補として選択されやすい。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: **天井リセット / 周期0へリセット / 液晶は富士山開始**。
- carryOverBehavior: **据え置きは天井・内部周期数を引き継ぐ**。
- powerCycleBehavior: 当時解析表で **電源OFF→ON（据え置き）は天井・内部周期数引継ぎ、液晶は富士山へ戻る**。
- gameCounterReset: 設定変更で周期0、据え置き/純電断で内部周期引継ぎ。
- ceilingAfterReset: 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常最大33周期構造へ戻る。
- modeAfterReset: 専用天国/周期モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: ツモ運等の詳細内部状態の設定変更/据え置き/純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 当時解析では周期0開始に大きな専用恩恵なし。実践サンプル32件でも目立った特徴なしだが、母数が小さいため確率値へは採用しない。
- resetPenalties: 前日周期/天井進捗を設定変更で消去する点が主なリセット効果。
- resetDetection: **液晶は変更でも据え置き電源再投入でも富士山へ戻るため、朝一液晶だけでは判別不可**。本機固有ガックン契約はNONE_CONFIRMED_AFTER_RESEARCH。
- publicMorningNumbers: **設定変更時0周期スタート**。
- resetBehaviorQA: **PARTIAL**。

## conflicts / safeguards

- 「33周期 ≒ 約990G」は周期長からの目安。固定990G天井に変換しない。
- 2016年「麻雀格闘倶楽部2」、2019年「参」、2021年「真」、2023年「覚醒」のresetBehaviorを初代へ混入しない。
- 後継2の1周期約40G / 最大約1320G等は初代へ転記しない。

## 2014-05-26群 / 境界

K-Navi全国一斉導入カレンダー掲載パチスロ:
1. **B-MAX**（アクロス）— No.820 / 処理済み
2. **麻雀格闘倶楽部**（KPE）— No.821 / 処理済み
3. **パチスロ御伽屋HANZO**（タイヨーエレック）— 未処理

- よって **2014-05-26_GROUP_OPEN** を維持。

## 遡及 resetBehavior QA

- 直前handoffのQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`。

## 次回再開地点

1. **recordCount 821 / chronologicalFrontier 2014-05-26 / 05-26_GROUP_OPEN** から開始。
2. 最新mainで既存登録を再確認してから、次の未処理 **パチスロ御伽屋HANZO（タイヨーエレック）— 2014-05-26** をNo.822候補として処理。
3. HANZO処理後、05-26群を全メーカー横断再監査しCLOSED判定。
4. その後05-27以降の次の具体日アンカーを確定して前進。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`

### 麻雀格闘倶楽部
- グリーンべると 2014-04-22: `https://web-greenbelt.jp/00006183/`
- K-Navi: `https://p-kn.com/slot/2054/`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/37/a.php`
- パチマガスロマガ50枚G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/37/c-1.php`
- 期待値見える化 朝一/周期: `https://slotjin.com/tenjou/mahjongfightclub-chance/`
- スロット解析攻略 天井/スペック: `https://www.slopachi-quest.com/article/majang-fight-club/`
- p-media 型式名/検定通過: `https://p-media.info/%E9%BA%BB%E9%9B%80%E6%A0%BC%E9%97%98%E5%80%B6%E6%A5%BD%E9%83%A8%EF%BC%88kpe%EF%BC%89%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E3%83%A6%E3%83%BC%E3%82%B6/`
- Amusement Japan 回顧: `https://amusement-japan.co.jp/article/detail/10003700/`
