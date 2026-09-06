# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **776**
- latestMachineAddedByChronology: **パチスロ テイルズ オブ デスティニー**（北電子）
- latestRecord: `docs/real_machine_db/machines/2013-11-18_tales-of-destiny.md`
- chronologicalFrontier: **2013-11-18**
- frontierLatestExactDateMachine: **パチスロ テイルズ オブ デスティニー**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-11-18_GROUP__TALES_OF_DESTINY_DONE__NEXT_TIGER_MASK**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再読してから継続。
- INDEXは旧集約状態のため、README規定に従い **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は **recordCount 775 / chronologicalFrontier 2013-11-18 / 11-18群OPEN / ギルティギア済み / 次テイルズ オブ デスティニー**。
- 既存レコード不在を確認した **「パチスロ テイルズ オブ デスティニー」** を776件目として追加。
- 11-18群はまだOPEN。既知残存候補は **タイガーマスク / マジカルハロウィン4 / スタードライバー**。次はタイガーマスクから処理する。

## 今回追加 — パチスロ テイルズ オブ デスティニー

### identity / 性能コア

- manufacturer: **北電子**。
- modelName: **テイルズオブデスティニーN**。
- releaseDate: **2013-11-18**。K-Naviで exact day、北電子・バンダイナムコ当時共同発表で2013年秋全国導入予定、当時販売系資料の11/17納品予定とも整合。
- generation/system: **5号機 / ART / 擬似ボーナス / CZ / ゲーム数管理 / 天井**。
- 機械割: **97.3 / 98.8 / 100.4 / 103.3 / 106.4 / 111.4%**。P-WORLD / すろぱちくえすと等で一致。
- 擬似ボーナス初当たり: **1/194.5 / 184.0 / 177.1 / 163.1 / 148.7 / 134.2**。複数資料で一致。
- すろぱちくえすとの別指標「ボーナス出現率」1/108.0〜1/71.2は初当たりと定義が異なるため混ぜない。
- baseGamesPer50: **約33G/50枚 ANALYSIS_SINGLE_RETROSPECTIVE**。
- 純増: **約2.2枚/G**。
- 擬似ボーナス: SUPER BIG **100G** / BIG **40〜100G** / REG **20G**。後年解析の概算枚数は約220枚 / 約90〜220枚 / 約20枚。
- モード別天井: 通常A **512G** / 通常B **999G** / 天国A **128G** / 天国B **128G**。最大天井は999G。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- パチマガスロマガ当時ページに **「朝イチ・設定変更 設定変更時は大チャンス!」** の専用解析項目が現存。
- K-Naviにも本機専用 **「設定変更後の挙動」** 項目が存在することを確認。
- ただし、取得可能な現存本文/検索キャッシュから具体的なゲーム数リセット契約、設定変更後モード振り分け、状態振り分け本文を回収できず。
- 機種名、表記揺れ、型式名、北電子、設定変更、リセット、朝一、据え置き、宵越し、電源OFF ON、天井、モード、ガックンを組み替えて再探索後も具体値を固定できなかったため **EXACT_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G / モード / 状態保持: **UNVERIFIED_AFTER_RESEARCH**。実戦記事の宵越し狙い事例から仕様を逆算しない。
- 単純電源OFF→ON時: **UNVERIFIED_AFTER_RESEARCH**。据え置きと同義扱いしない。
- 設定変更時ゲーム数: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井値: **NONE_CONFIRMED_AFTER_RESEARCH**。通常モードの512/999/128Gを朝一専用値に転記しない。
- 設定変更後モード/状態の具体値: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- reset benefit: 当時解析が設定変更を「大チャンス」と明示しており有利要素の存在は支持。ただし具体的機構/数値は **DETAIL_UNVERIFIED_AFTER_RESEARCH**。
- reset penalty: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 変更判別: ガックン/初期出目/液晶/ランプ等の本機固有高信頼契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**。天国A/Bの128Gは通常モード値であり設定変更専用値ではない。

### safeguards

- 初当たり1/194.5〜1/134.2と別指標「ボーナス出現率」1/108.0〜1/71.2を混ぜない。
- 最大999Gと通常A 512G / 天国128Gを混同しない。
- 通常時天国A/B 128Gを「設定変更後128G」に変換しない。
- 「設定変更時は大チャンス」という当時解析見出しから具体モード率・短縮天井を推測しない。

## 遡及resetBehavior QA 進捗

- QAカーソルは引き続き `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は本線のテイルズ オブ デスティニー追加を優先し、QAカーソルは進めていない。
- 既存COMPLETE_CORE/PARTIAL等の性能側判定は変更していない。

## 次回再開地点

1. **recordCount 776 / chronologicalFrontier 2013-11-18 / 11-18群OPEN** から開始。
2. 次の未処理候補は **「タイガーマスク」**。既存レコード不在確認後、性能コア + resetBehavior v0.7を収集。
3. 続いて **マジカルハロウィン4 → スタードライバー**。
4. 11-18同日全メーカー監査を行い、追加候補があれば日付内で処理してからCLOSED。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。
6. PARTIAL / UNVERIFIED / reset欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧資料へ検索系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ テイルズ オブ デスティニー

- バンダイナムコゲームス / 北電子 当時共同プレスリリース: `https://www.bandainamcoent.co.jp/corporate/press/release/59/pdf/20130827.pdf` — シリーズ初パチスロ、北電子との共同開発、2013年秋全国導入予定。
- K-Navi: `https://p-kn.com/slot/1928/` — ホール導入2013-11-18、純増約2.2枚/G、設定変更後の挙動/解除ゲーム数振り分け解析項目の存在。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7187` — 機械割、擬似ボーナス初当たり、純増約2.2枚/G、SUPER BIG 100G / BIG 40〜100G / REG 20G。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/88/kitac_slot_88.php` — 2013年11月、ゲーム数解除、朝イチ・設定変更「設定変更時は大チャンス!」専用解析項目。
- すろぱちくえすと: `https://www.slopachi-quest.com/kisyubetsu/tales-of-destiny/` — モード別天井512/999/128/128G、初当たり、機械割、モード特徴。
- 中一商事旧実機DB: `https://www.nakaiti.com/html/sKitadenshi077.html` — 型式名テイルズオブデスティニーN、ART、擬似ボーナスゲーム数、純増約2.2枚/G。
- CrankySeven後年解析: `https://crankyseven.com/talesofdestiny-pc.htm` — 擬似ボーナス概算獲得枚数、機械割系列。
- slotto実機資料PDF: `https://slotto.com.tw/data/attachment/product/202210/geltrak8ct.pdf` — 約33G/50枚、最大999G天井。
- スロスター当時記事: `https://ameblo.jp/slostar/entry-11600931154.html` — 2013-11-17納品予定。
