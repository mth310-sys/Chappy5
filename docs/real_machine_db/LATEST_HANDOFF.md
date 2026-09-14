更新日: 2026-09-14

## 現在地点
- recordCount: **1720**
- latestRecordAdded: **吉宗 — No.1720**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-04-21_yoshimune.md`
- chronologicalFrontier: **2025-04-21**
- schema: **resetBehavior v0.7**
- status: **2025-04-21_BOUNDARY_OPEN_1_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1719レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 直前handoffの次の未処理機種 No.1720 `吉宗`（2025-04-21）を処理。
- 性能コア、設定変更/据え置き/純電断、天井/ゲーム数、通常モード/鷹狩りモード、内部状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を調査。
- 公式/業界/HAZUSE/必勝本/なな徹/1geki/パチビー/ちょんぼりすた/旧DB系を横断。競合は平均せずCONFLICT、十分な再探索後も固定できない値のみUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCHとした。

## No.1720 — 吉宗
- path: `docs/real_machine_db/machines/2025-04-21_yoshimune.md`
- manufacturer: **サボハニ / 大都技研**
- formalModel: **L／ヨシムネS／SC2**
- inspectionCode: **430582**
- releaseDate: **2025-04-21**
- payoutRate: **97.8 / 99.1 / 100.6 / 104.1 / 107.1 / 112.0%**
- bonusInitial: **1/378.9 / 1/369.6 / 1/358.8 / 1/335.1 / 1/318.5 / 1/292.4**
- base: **約33G/50枚**
- netIncrease: **約7.11枚/G**
- basicPayout: **BIG約711枚 / REG約72枚 / 裏鷹狩り期待獲得約3600枚**

## No.1720 resetBehavior v0.7
- settingChange: **天井G RESET / 通常モード再抽選 / 鷹狩りモード再抽選 / 液晶0G / 有利区間RESET / 内部状態RESET扱い。実戦上は昼ステージ開始。**
- carryOver: **据え置きは天井までの内部G、通常モード、鷹狩りモード、内部状態、有利区間を引継ぎ。**
- powerCycle: **天井G・通常モード・鷹狩りモード・内部状態・有利区間を引継ぎ、液晶G数のみ0G。開始ステージはUNVERIFIED_AFTER_RESEARCH。**
- ceiling: **通常最大999G+α。設定変更後も最大999G+αで固定短縮なし。通常B 465G / 天国A・B 193Gはモード固有天井でありリセット専用短縮ではない。**
- resetBenefits: **固定天井短縮なし。設定変更専用モード優遇率/高確率/ボーナス期待度上乗せ等の公開数値はNONE_CONFIRMED_AFTER_RESEARCH。**
- detection: **設定変更/純電断とも液晶0Gのため表示だけでは判別不可。固定短縮天井もない。本機固有ガックン条件・発生率はUNVERIFIED_AFTER_RESEARCH。**
- numericResetData: **resetMaximumCeiling 999G+α / resetCeilingShortening なし / resetModeDistribution PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**

## No.1720 conflicts
- `NO_RESET_CEILING_SHORTENING_VS_MIXED_MACHINE_PAGES`: 一部検索結果の「リセット後800G」は2024年 `吉宗RISING` 等との混同。2025年 `L／ヨシムネS／SC2` は必勝本・なな徹・複数解析で最大999G+αを維持。短縮なしをcanonical。
- `BB_711_VS_INDUSTRY_HEADLINE_771_TYPO`: 業界記事見出しのみ771枚、本文と全主要資料は711枚。canonicalは711枚。

## 2025-04-21境界 — OPEN 1/3 known canonical
1. 吉宗 — No.1720 DONE
2. スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ — NEXT
3. L麻雀物語 — QUEUED

## 次回再開地点
- 最新mainを再同期しNo.1720と本handoffを確認。
- **No.1721候補 `スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ` — 2025-04-21** から再開する。
- その後 `L麻雀物語` を同一キューで処理。
- 2機処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-04-21境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は新規収集を優先。既存旧レコードを推測更新していない。
- 次回も新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを確定して遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- 大都技研公式 吉宗導入記念キャンペーン: https://www.daitogiken.com/contents/product/slot/yoshimunes/campaign/
- 大都技研公式 サウンドトラック: https://www.daitogiken.com/products/music/soundtrack/
- アミューズメントジャパン/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30425/amusement
- HAZUSE 吉宗: https://hazuse.com/machine/pachislot/SX0100/
- パチビー: https://www.pachibee.jp/machines/index/225030005
- 1geki 基本スペック: https://1geki.jp/slot/l_yoshimune/39/
- 1geki 天井/モード: https://1geki.jp/slot/l_yoshimune/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86662/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86650/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/920/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/920/29008/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/229898/
- ぽこすろっと: https://www.nankaikoya.jp/l-yoshimune-kitaichi/
