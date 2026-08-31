# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準139件。**
- 138件目 `電撃ネットワーク` の次、前handoff指定どおり `新世紀エヴァンゲリオン～まごころを、君に～` を139件目として登録。
- resetBehavior遡及QAは前handoffで未完だった `サンダーバードNEOXX` を再検索し、v0.7項目を追加。既存性能コアPARTIALは維持し、reset QAを別管理。

## 今回新規追加

### 新世紀エヴァンゲリオン～まごころを、君に～（ビスティ）

- `docs/real_machine_db/machines/2007-07-09_shinseiki-evangelion-magokoro.md`
- releaseDate: `2007-07-09`（ALL7.jp導入予定日。2007年7月市場投入は当時業界記事でも確認）
- systemType: ボーナス + RT
- coreStatus: `COMPLETE_CORE`
- qaResetBehavior: `PARTIAL`

### 性能コア

- 設定別BIG: `1/372.36 → 1/284.94`
- 設定別REG: `1/809.09 → 1/585.14`
- 合算: `1/255.00 → 1/191.63`
- 50枚ベース（解析シミュレーション）: `41.36 → 48.42G`
- 赤/青BIG: 約401〜416枚級、黄BIG: 約251〜260枚級、REG: 約50〜52枚 + RT50G。
- REG後は最大50GのRT `レイチャンス`。特殊リプレイ成立で次回ボーナスまでRT `暴走モード`。
- RT純増はP-WORLD約+0.9枚/G、K-Navi暴走モード約+1枚/G。別解析に「コイン増加は見込めない」表現があるため定義差をCONFLICT注記。

### 機械割CONFLICT

系統A:
- 95.3 / 98.2 / 101.7 / 104.5 / 107.4 / 113.5%

系統B:
- 96.2 / 98.7 / 101.5 / 103.8 / 106.2 / 111.2%

平均せず双方保持。

### 天井関連CONFLICT

- 後年回顧資料にはBIG後1000G/REG後800Gから天井RTとする記述あり。
- 一方、別後年記録には天井なしとする記述あり。
- 当時一次/解析本文で今回確定できなかったため、天井を確定値として扱わずCONFLICT/UNVERIFIED。

## v0.7 resetBehavior — エヴァまごころ

- settingChangeBehavior: RT/内部状態/天井候補ゲーム数の設定変更時処理はUNVERIFIED。
- carryOverBehavior: 据え置き時のRT状態/ゲーム数引継ぎはUNVERIFIED。
- powerCycleBehavior: 電源OFF→ONのみのRT/内部カウンタ処理はUNVERIFIED。
- gameCounterReset / ceilingAfterReset: 天井仕様自体に資料差があるためUNVERIFIED。
- modeAfterReset: 朝一専用/変更専用モードはNONE_CONFIRMED。
- stateAfterReset: レイチャンス/暴走モード状態の変更時処理はUNVERIFIED。
- advantageousSectionReset: NOT_APPLICABLE。
- resetBenefits / resetPenalties: 設定変更固有の確定恩恵/不利はNONE_CONFIRMED。
- resetDetection: K-Navi本機メニューに `BGM変化で設定変更判別` の項目存在を確認。ただし詳細ページは取得環境で403のため具体条件/判定方向はUNVERIFIED。本機固有ガックンも未確定。
- numericResetData: 設定変更時モード振り分け、朝一当選率、短縮G数等はUNVERIFIED。

## resetBehavior遡及QA

### サンダーバードNEOXX（藤商事 / 2006-06）

- `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`
- 既存 `PARTIAL` 性能コアは維持。
- `qaResetBehavior: PARTIAL` を追加。
- SBIG後50G RTは既存資料で確認済み。
- 設定変更/据え置き/電源OFF→ON時のRT残G・内部RT状態処理は、表記揺れ/メーカー名/設定変更/朝一/RT/ガックン等で資料系統を変えて再探索したがUNVERIFIED。
- 通常時天井、変更時短縮、朝一専用モード、変更固有恩恵/不利は今回NONE_CONFIRMED。
- 有利区間はNOT_APPLICABLE。
- 本機固有の変更判別/ガックン、公開朝一数値はUNVERIFIED。

## 今回の主要出典

### エヴァまごころ
- ALL7.jp: https://www.all7.jp/plans/index/2007/07/20
- グリーンべると: https://web-greenbelt.jp/00004271/
- P-WORLD: https://www.p-world.co.jp/machine/database/4743
- K-Navi: https://p-kn.com/slot/591/
- K-Navi 暴走モード: https://p-kn.com/slot/591/3515/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0173/
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/eva-magokoro.html
- パチナビ: https://pachinavi.net/machines/eva-magokoro-1/settei/
- 旧解析: https://ccw.moryou.com/evaeva/koyaku1.html
- P-TRO回顧: https://ptro.live/p-evangelion.html

### サンダーバードNEOXX
- HAZUSE: https://www.hazuse.com/i/data/thunderbirds/top.htm
- 藤商事後年整理: https://artikeldigital.com/ja/%E8%97%A4%E5%95%86%E4%BA%8B
- 娯楽の学校: https://goraku-gakkou.com/5gouki-2005-2006/

取得日: 2026-08-31

## 今回GitHub反映

- エヴァまごころ新規追加: `1976406bf5d099cdedb565d4d40bb1c61da34f9c`
- サンダーバードNEOXX resetBehavior QA: `6696b73ba0166aa0f78c13045760d1f66feed008`

## 次回再開地点

1. **2007-07-16納品開始予定が当時業界記事で確認できる `俺の名はルパン三世` を次の未処理候補として、性能コア + v0.7 resetBehaviorを収集する。**
2. グリーンべると2007-06-25記事で、平和/オリンピア合同発表、納品 `2007年7月16日から予定`、SBB/NBB各約300枚、SBB後100G RT・RB後50G RT、RTは現状維持程度、1000円約36〜38Gまで事前確認済み。
3. `俺の名はルパン三世` の設定別SBB/NBB/RB、合算、機械割を複数資料で照合し、同一機の平和HEIWA BROSパネル/オリンピア次元パネルを別性能機として二重計上しない。
4. その後2007-07-16〜07-23境界をメーカー横断監査する。ALL7.jpでは7/23に `Bun Bun Maru / ジャンジャン飯店 / ハワイ / ハワイっ娘 / マジカルハロウィン` 等の予定を確認済み。
5. `パチスロ北斗の拳2 乱世覇王伝 天覇の章` は7/20時点のサミーネットワークス公式リリースで「ホール導入に先駆けて」体験版配信と確認できるため、7/20以前の実導入として扱わず、7月下旬候補として具体納品日を別途監査する。
6. `ラーメン王` は以前のhandoffどおり2007-07-29納品開始候補として保留。
7. resetBehavior遡及QAはサンダーバードNEOXXの次の未対応最古レコードをGitHub最新mainで検索し、既補完なら次へ進む。
8. PARTIAL/UNVERIFIEDやリセット欠損は検索語・資料系統を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
9. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの139件地点を正**として継続する。
