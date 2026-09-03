# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **505**
- latestMachineAdded: **デビルマンII ～悪魔復活～**（エレコ / exact導入日CONFLICT、時系列主値2010-08-27）
- latestRecord: `docs/real_machine_db/machines/2010-08-27_devilman2-akuma-fukkatsu.md`
- chronologicalFrontier: **2010-08-27**
- frontierLatestMachine: **デビルマンII ～悪魔復活～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線504実レコード「アベノ橋魔法☆商店街」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **504** / chronologicalFrontier **2010-08-23**。
- 2010-08-24〜2010-08-29境界を監査し、旧導入カレンダーの8/27候補を確認。候補はhandoffに8/30アンカーとして残っていた同一機「デビルマンII ～悪魔復活～」であり、repo未登録を確認して505件目として追加。
- exact dateはユニバーサル公式が2010年8月、HAZUSEが2010-08-27、K-Navi/パチビーが2010-08-30で競合。二重登録せず1レコードに統合し、時系列主値は確認できた最古の直接導入日2010-08-27とした。

## 505 — デビルマンII ～悪魔復活～ 要約

- メーカー: **エレコ**
- 世代/タイプ: **5号機 / A+ART / セットストック型ART「アーマゲドン」**
- 機械割: **98.1 / 99.9 / 104.2 / 107.2 / 112.7 / 119.3%**
- BIG: **1/431.2 / 1/422.8 / 1/394.8 / 1/383.3 / 1/368.2 / 1/339.6**
- ボーナス合算: **1/275.4 / 1/271.9 / 1/260.1 / 1/255.0 / 1/248.2 / 1/234.9**
- ART初当たり: **1/526.5 / 1/454.2 / 1/450.0 / 1/386.1 / 1/359.5 / 1/224.6**
- ボーナス＋ART合算: **1/181.8 / 1/170.1 / 1/164.8 / 1/153.6 / 1/146.9 / 1/114.8**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・メーカー＋50枚/1000円/千円/ベース/コイン持ち/千円回転へ検索語を変え、公式・主要DB・旧解析を横断したが直接値を確定できず。小役から逆算しない。
- ART: **50G / 約+1.4枚/G**
- BIG約/最大**210枚**、REG系約/最大**102枚**
- 通常天井: 複数旧解析資料で**ボーナス間1500G** → ART。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_RELEASE_DATE_CONFLICT_BASE_UNVERIFIED**

## resetBehavior v0.7 — デビルマンII ～悪魔復活～

- **設定変更**: 通常内部状態を低確/高確へ再抽選することをHAZUSEとパチ＆スロ必勝本で確認。
- **公開朝一数値**: 全設定共通で **低確65.89% / 高確34.11%**。両高信頼解析で一致。
- **状態CONFLICT**: 単一旧二次資料のみ **低確34.1% / 高確65.9%** と逆転表記。平均化せず、主値は高信頼2系統一致を採用し競合値も保持。
- **ゲーム数/天井**: 通常天井1500G自体は確認。設定変更時の1500G進捗CLEAR/RETAINは本機固有の直接高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 天井カウンタ、内部状態、ARTストック/残Gの保持は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井カウンタ、内部状態、ARTストック/残G、初期出目/液晶の単純電源断復帰は `UNVERIFIED_AFTER_RESEARCH`。
- **天井短縮**: 設定変更専用の短縮/変更は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機）。
- **朝一恩恵/不利**: 設定変更時に高確スタート34.11%、低確スタート65.89%。
- **変更判別**: 当時実戦番組に「朝イチきっちり変更判別」の記述は残るが手順が公開本文で確認できず、ガックン/初期出目/ランプ/液晶等も再探索後 `SPECIFIC_METHOD_UNVERIFIED_AFTER_RESEARCH`。

## conflicts

- exact release date: 公式 **2010年8月** / HAZUSE **2010-08-27** / K-Navi・パチビー **2010-08-30**。
- settingChangeStateDistribution: HAZUSE＋必勝本 **低確65.89% / 高確34.11%** / 単一旧二次資料 **低確34.1% / 高確65.9%**。
- 後発別機種 `SLOTデビルマンχ` の1280G天井を本機へ混入させない。本機は複数旧解析資料でボーナス間1500G。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、次回以降recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

### デビルマンII ～悪魔復活～
- ユニバーサル公式: `https://www.universal-777.com/product/slot/devilman2/`
- HAZUSE DATA: `https://data.hazuse.com/?genre=209&machine_code=0S0434`
- K-Navi: `https://p-kn.com/slot/1250/`
- パチビー: `https://www.pachibee.jp/machines/about/210070002`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6044`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1650/1/26196`
- slot-navi旧解析: `https://slot-navi.com/10/devilman2/`
- Seven Peace旧解析: `https://www.mb.ccnw.ne.jp/seven-peace.com/a-na/tatata/debiru2/debirumannakuma.html`
- アニヲタWiki回顧: `https://w.atwiki.jp/aniwotawiki/pages/19076.html`
- ビデオマーケット変更判別実戦紹介: `https://www.videomarket.jp/title/082072/A082072015999H01`

## 今回のGitHub更新

- 505 デビルマンII ～悪魔復活～追加: commit `efbdf0514590d99356cef67edbcfb0aa0380a531`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 505 / chronologicalFrontier 2010-08-27**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-08-28〜2010-08-29**を境界監査。HAZUSE新台カレンダーでは8/27の次の2010年8月アンカーが8/30であることを確認済みだが、別系統導入資料で漏れを潰す。
3. 8/28〜29を閉じたら**2010-08-30同日群**を監査する。「デビルマンII ～悪魔復活～」は8/30説も505に統合済みのため重複追加しない。同日他機種の最古未登録を探して506件目とする。
4. 505の追加QAは、設定変更/据え置き時の1500G天井カウンタ、単純電源OFF→ON、具体的な朝一変更判別法、50枚ベースの新しい直接資料が見つかった場合のみ追補。既存性能コアをやり直さない。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実ファイルpath確定から再開し、既にresetBehavior済みの `2006-11-27_thunder-v-special.md` はスキップする。
