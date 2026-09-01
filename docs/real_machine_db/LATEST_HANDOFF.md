# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは239件地点。239 `ジャンキージャグラー` まで登録済みだった。
- 今回、2008-04-07発売 `パチスロ ナイトライダー（型式: ナイトライダーSP）` を240件目、同日 `パチスロ クローズ（型式: パチスロクローズS）` を241件目として追加。
- 2008-04-08〜13境界を再監査し、グリーンべると一次業界資料で `お天気お姉さん（バルテック）` の2008-04-13納品開始を確認。242件目として追加。
- 導入時系列の具体日前進地点は **2008-04-13**。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 240. パチスロ ナイトライダー（銀座）

- record: `docs/real_machine_db/machines/2008-04-07_night-rider.md`
- commit: `9eab8d8fbb39c851b9a0f0878489494248c29081`
- modelName: `ナイトライダーSP`
- releaseDate: `2008-04-07`
- systemType: ボーナス + RT（CZ経由・25G/100G RT）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 機械割: `97.5 / 98.7 / 101.1 / 102.9 / 106.2 / 109.6%`（5号機クロニクル単一系列）。
- BIG合成: `1/395 / 1/383 / 1/362 / 1/347 / 1/297 / 1/266`。
- MIDDLE合成: `1/585 / 1/575 / 1/542 / 1/516 / 1/448 / 1/407`。
- 全ボーナス合成: `1/235.7 / 1/230.0 / 1/217.0 / 1/207.4 / 1/179.1 / 1/161.0`。P-WORLD/K-Naviで一致。
- BIG約265枚、MIDDLE約104枚。
- RT「ナイトタイム」25G/100G、純増約+0.6枚/G、RTループ率約50%。
- 50枚ベースは表記揺れ・項目語変更後も `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- 通常時ゲーム数天井は確認されず `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- 設定変更・据え置き・電源OFF→ON時のCZ/RT残G・内部状態、本機固有ガックン/初期出目は、機種名/型式名/銀座とリセット系検索語を組み替え再探索後も直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、短縮天井、公開朝一専用数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。

## 241. パチスロ クローズ（トリビー）

- record: `docs/real_machine_db/machines/2008-04-07_crows.md`
- commit: `a4625849cbc546275e1e8059e0c7384fce68100e`
- modelName: `パチスロクローズS`
- releaseDate: `2008-04-07`
- systemType: ボーナス + 無限ART / 100G周期CZ / パンク回避
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMED_CORE`

### 性能コア

- 機械割: `95.5 / 98.5 / 100.3 / 103.1 / 106.7 / 108.0%`。
- 赤7BIG: `1/1040.25 / 1/1024.00 / 1/1008.25 / 1/1008.25 / 1/963.76 / 1/923.04`。
- 青7BIG: `1/1149.75 / 1/1110.78 / 1/1092.27 / 1/1074.36 / 1/992.97 / 1/936.23`。
- REG: `1/923.04 / 1/873.81 / 1/851.12 / 1/728.18 / 1/682.67 / 1/648.87`。
- 合算: `1/343.12 / 1/330.99 / 1/324.44 / 1/303.41 / 1/284.94 / 1/270.81`。
- BIG約320枚、REG約95枚。
- 無限ART「クローズチャンス」純増約+0.9枚/G。CZ終了後100Gで再CZ。
- 50枚ベースは `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — 重要直接情報

- P-WORLDに **設定変更後は内部的にチャンスゾーンから開始** と明記。
- `settingChangeBehavior / modeAfterReset / stateAfterReset = CHANCE_ZONE_START_CONFIRMED`。
- 朝一いきなりARTなら設定変更濃厚とされるため `resetDetection = MORNING_IMMEDIATE_ART_IS_STRONG_SETTING_CHANGE_INDICATOR`。
- 通常CZ周期は100G。設定変更時CZ開始は通常周期を待たず朝一ART機会を持つ主要恩恵として保存。
- 据え置き時の周期カウンタ、電源OFF→ONのみでのCZ/ART状態、具体的ゲームカウンタ処理は直接資料不足で `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE`。

## 242. お天気お姉さん（バルテック）

- record: `docs/real_machine_db/machines/2008-04-13_otenki-oneesan.md`
- commit: `7fc60f121b2b5211536d57178841435caf14e9e6`
- releaseDate: `2008-04-13`
- releaseDateConfidence: `INDUSTRY_DELIVERY_START`
- systemType: ボーナス + RT（33G CZ経由 / 最大120G RT）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 5号機クロニクル機械割: `97.1 / 98.7 / 102.7 / 104.9 / 106.2 / 107.7%`。別系列の設定別機械割表は今回未取得のため単一整理資料値。
- BIG/MIDDLE設定別確率・合算確率は、表記揺れ/メーカー/総発売元/各確率語を変えて再探索したが高信頼な設定別表を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 50枚ベースも `UNVERIFIED_AFTER_RESEARCH`。
- BIG純増約260枚、MIDDLE純増約190枚。
- ボーナス後33G CZ。特殊リプレイで最大120G「ライブRT」。RT純増約+0.25枚/G。
- RT突入期待度はBIG後約1/2、MIDDLE後約1/3。120G間ボーナス期待度約45%。

### v0.7 resetBehavior

- 通常時ゲーム数天井・短縮天井・朝一専用モード/恩恵数値は確認できず、ゲーム数天井は `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- 設定変更/据え置き/電源OFF→ON時のCZ/RT残G・状態、本機固有変更判別は検索語と資料系統を変えて再探索後も直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE`。

## 今回の境界監査

- `ビートマニア（KPE）` はグリーンべるとで本導入2008-05-07（一部先行4/21）、今回4/8〜13本線から除外して後続キューへ。
- `エイリアン2（アビリット）` はグリーンべるとで4/20納品開始、パチビーで4/21導入。4/13より後なので後続キューへ。
- `クイージ（コルモ / SNKプレイモア総販売）` はグリーンべるとで4/20納品開始。後続キューへ。
- `お天気お姉さん` はグリーンべると一次記事で4/13納品開始が確定したため242として先に処理。
- 2008-04-14は既知候補 `デジスロF / デジスロV-30（ベルコ）`。旧業界史で4/14発売記録あり。30φ版はP-WORLDでも独立型式を確認済み。

## 今回の主要出典

取得日: 2026-09-01

### ナイトライダー
- グリーンべると: https://web-greenbelt.jp/00003455/
- P-WORLD: https://www.p-world.co.jp/machine/database/5112
- K-Navi: https://p-kn.com/slot/779/
- 5号機クロニクル: https://5goki.com/ginza
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2008/04/knight-rider
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako05.html
- pacnk: https://pacnk.com/photoslot/mlist_2008.html

### パチスロ クローズ
- P-WORLD: https://www.p-world.co.jp/machine/database/5089
- 5号機クロニクル: https://5goki.com/trivy
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako05.html
- 秋田書店: https://www.akitashoten.co.jp/comics/4253110142
- pacnk: https://pacnk.com/photoslot/mlist_2008.html

### お天気お姉さん
- グリーンべると: https://web-greenbelt.jp/00003439/
- K-Navi内覧会: https://p-kn.com/topics/exhibition/266/
- P-WORLD: https://www.p-world.co.jp/machine/database/5121
- 5号機クロニクル: https://5goki.com/baltec

### 後続境界確認
- ビートマニア導入記事: https://news.p-world.co.jp/articles/2827/greenbelt
- エイリアン2: https://web-greenbelt.jp/00003522/
- クイージ: https://web-greenbelt.jp/00003513/

## 重複防止

- 既存239件の再追加禁止。
- 240 `パチスロ ナイトライダー`、241 `パチスロ クローズ`、242 `お天気お姉さん` も再追加禁止。
- `ナイトライダーSP` は240の型式名。同名別レコードにしない。
- `パチスロクローズS` は241の型式名。同名別レコードにしない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準242件地点 / 2008-04-13まで完了。**
2. **2008-04-14 `デジスロF（ベルコ）` と `デジスロV-30（ベルコ）` の既存登録を確認し、未登録なら25φ/30φを独立レコードとして時系列順に処理。**
3. 4/14群処理前後で同日の他未処理5号機をメーカー一覧・旧業界史・pacnk等で漏れ監査する。
4. その後、4/15〜19を監査してから4/20納品候補 `エイリアン2` / `クイージ`、4/21先行候補 `ビートマニア` へ進む。具体導入日定義を保持し、先行導入/全国導入を混同しない。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を変え十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合値は平均せず `CONFLICT`。
