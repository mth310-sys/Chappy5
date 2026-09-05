# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **652**
- latestMachineAdded: **ねぇ～ねぇ～島娘**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2012-04-16_nee-nee-shimamusume.md`
- chronologicalFrontier: **2012-04-16**
- frontierLatestExactDateMachine: **ねぇ～ねぇ～島娘**
- schema: **resetBehavior v0.7**
- status: **2012-04-16_GROUP_OPEN__CONTINUE_WITH_QUEENS_BLADE**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 651 / frontier 2012-04-16。
- handoff指定最優先候補「ねぇ～ねぇ～島娘」をrepo検索で未登録確認し、652件目として追加。
- `ToHeart2 バカンスバージョン` はタイヨーエレックが2012-03-27に発表した**新パネル**で、ファミ通が「ゲーム性・液晶演出に変更なし」、グリーンべるとが同機の新パネルと明記。型式も既存ToHeart2と同じ「トゥハート2 / 1S0600」系なので、独立性能機種としては**重複扱い・新規レコード化しない**。
- 追加監査でJPS「パチスロ クイーンズブレイド 流浪の戦士」が2012-04-16導入候補として確認され、repo検索では同名未登録。次の本線候補とする。

## 今回の本線追加 — ねぇ～ねぇ～島娘

### 導入日・型式

- 時系列キー: **2012-04-16**。
- DK-SIS白書2012の4月カレンダーが4/16導入開始欄に「パチスロマクロスフロンティア」「ねぇ～ねぇ～島娘」を明記。
- パチビーも導入日2012-04-16。
- K-Naviは2012-04-23ホール導入開始としており日付CONFLICT。平均せず双方を保持し、実稼働カレンダーDK-SISの4/16を主キーに採用。
- manufacturer: **オリンピア**。
- formalModelName: **ねぇ～ねぇ～島娘2**。
- approvalNumber: **2S0138**（P-WORLD）。

### 性能コア

- systemType: **5号機 ART / 擬似ボーナスS-AT / ゲーム数テーブル+毎ゲーム抽選 / CZ搭載**。
- 機械割: **96.4 / 98.0 / 100.1 / 104.7 / 107.8 / 113.3%**。K-Navi/P-WORLD/CrankySeven一致。
- BIG平均出現率: **1/261.6 / 253.5 / 232.5 / 203.6 / 182.4 / 157.2**。
- REG平均出現率: **1/245.1 / 204.6 / 245.0 / 202.6 / 241.5 / 197.3**。
- 合成: **1/126.5 / 113.2 / 119.3 / 101.5 / 103.9 / 87.5**。
- BIG初当り: **1/677.0 / 631.0 / 643.6 / 555.7 / 561.3 / 483.6**。
- 50枚ベース: **約33.6G**（CrankySeven直接値、別解析約33Gで整合）。
- S-AT純増: **約+2.7枚/G**。2012-03-26娯楽産業、K-Navi、P-WORLD、当時コムシード資料で照合。
- BIG CHANCE: 20ナビ1セット、最低2～最大10セット、平均約300枚。REG: 8ナビ固定、約40枚。
- CZ「ときめきゾーン」: ボーナス後5G。
- 天井/規定G: P-WORLDは通常モード960G・高確1152GでBIG確定。パチマガスロマガ/CrankySevenは最大1152Gを掲載。定義差として保持。

### resetBehavior v0.7

- **設定変更時モード再抽選を数値付きで確認**。
  - 設定1: 通常24.5 / 高確70.0 / 天国A5.0 / 天国B0.5%
  - 設定2・3: 通常19.5 / 高確70.0 / 天国A10.0 / 天国B0.5%
  - 設定4～6: 通常9.5 / 高確80.0 / 天国A10.0 / 天国B0.5%
- 高確以上スタート率は設定1 **75.5%**、設定2・3 **80.5%**、設定4～6 **90.5%**。
- パチマガスロマガが規定ゲーム数項目で **設定変更後128Gまで**を独立チャンスゾーンとして明記。CrankySevenも設定変更後128Gまでがチャンスと記載。
- `settingChangeBehavior`: **CONFIRMED_MODE_RELOTTERY_AND_POST_CHANGE_128G_CHANCE_ZONE**。
- `gameCounterReset`: **PARTIAL_CONFIRMED_SETTING_CHANGE_USES_DEDICATED_POST_CHANGE_GAME_TABLE**。専用朝一テーブル/ゾーン開始は確認できるが、「前日G数を0Gクリア」と直接書いた別系統資料までは取得できずCLEAR断定を避けた。
- `ceilingAfterReset`: **RESET_SPECIFIC_128G_CHANCE_ZONE_CONFIRMED__EXACT_RESET_CEILING_UNVERIFIED**。128Gは当選確定天井ではなくチャンスゾーン。
- `modeAfterReset`: **CONFIRMED_WITH_PUBLIC_DISTRIBUTION**。
- `stateAfterReset`: モードレベルはCONFIRMED。その他一時状態/前兆/BIG側状態はUNVERIFIED。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **CONFIRMED**（高確以上振り分け+128Gチャンス）。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **CONFIRMED**（上記モード振り分け・128Gチャンス）。

### CONFLICT / 品質メモ

- 導入日: DK-SIS/パチビー **4/16** vs K-Navi **4/23**。平均せずCONFLICT。
- 機械割についてパチ＆スロ必勝本はシミュレート値 **95.53 / 97.38 / 99.16 / 104.12 / 106.76 / 112.36%**を掲載しており、市場スペック表の96.4～113.3%系列とは定義が異なる。今回の主値はK-Navi/P-WORLD等の公称・通常掲載系列とし、必勝本シミュレート値は定義違いとして平均しない。
- 4号機版「ねぇ～ねぇ～島娘」、2025年「L島娘」は別機種であり流用禁止。

## 次回再開地点

1. **recordCount 652 / chronologicalFrontier 2012-04-16**から開始。
2. **2012-04-16同日群を継続**。
3. 最優先候補: **パチスロ クイーンズブレイド 流浪の戦士（JPS）**。当時導入予定一覧で2012-04-16、repo検索では同名未登録。重複再確認→メーカー/業界/当時解析で導入日・型式・性能コア・resetBehavior v0.7を収集し、未登録なら653件目として追加。
4. `ToHeart2 バカンスバージョン` は独立機種ではなく既存ToHeart2の新パネルと判定済み。新規レコード化しない。
5. クイーンズブレイド処理後も4/16群をメーカー別/当時導入一覧で再監査し、漏れがなければ4/23以降へ進む。
6. 欠損は表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックン/50枚を組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- DK-SIS白書2012: `https://www.daikoku.co.jp/wp-content/uploads/siswp/2012/dkwp/files/siswp/2012/HTML/index139.html`
- 娯楽産業: `https://www.goraku-sangyo.com/オリンピア／平和　パチスロ新機種「ねぇ〜ねぇ〜/`
- K-Navi: `https://p-kn.com/slot/1609/`
- K-Navi 設定変更モード: `https://p-kn.com/slot/1609/37635/`
- K-Navi 内部モード: `https://p-kn.com/slot/1609/37631/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6685`
- パチマガスロマガ REG当選契機: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/103/i.php`
- パチビー: `https://www.pachibee.jp/machines/lecture/212030003`
- CrankySeven: `https://crankyseven.com/nenesimamusume-pc.htm`
- コムシード: `https://www.commseed.net/news-old/120525_p1.html`
- グリーンべると ToHeart2新パネル: `https://news.p-world.co.jp/articles/5220/greenbelt`
- ファミ通 ToHeart2新パネル: `https://www.famitsu.com/news/201203/27012179.html`

## GitHub commits

- ねぇ～ねぇ～島娘 machine record: `19c95693ec50b732b622236195dae1431ae3ba8c`
