# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **412件 `ゴールデンベルE`** まで進行。
- 411 `スモモチャン` 後、2009-10-01同日群と10-02〜10-11境界を再監査。P-WORLD月次一覧では月精度だったベルコ `ゴールデンベルE` について、同機ページの2009-10-09当時掲示板に「設置済み」言及、10-12にはダイナム専用機として実戦した言及を確認した。
- 全国導入開始の具体日は一次/業界資料で確定できなかったため、412の `releaseDate` は **2009-10（月精度）** のまま保持し、10-09は `earliestObservedInstallationTrace` 相当の補助証拠としてのみ扱う。ユーザー投稿を全国導入日へ格上げしない。

## 412. ゴールデンベルE

record:
- `docs/real_machine_db/machines/2009-10_golden-bell-e.md`

machine record commit:
- `5d8618a6746013a8b86f03ad6ea56e547fec7d33`

要点:
- manufacturer: **ベルコ**
- formalModelName: **ゴールデンベルE**
- approvalNumber: **8S1379**
- releaseDate: **2009-10**。P-WORLD掲示板に2009-10-09時点の設置済み言及あり。ただし全国導入具体日は `UNVERIFIED_AFTER_RESEARCH`。
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体**
- BIG: **1/297.0 → 1/260.0**
- REG: **1/481.0 → 1/321.0**
- 合算: **1/184.0 → 1/143.0**
- BIGは345枚超払い出しで終了、REGは119枚超払い出しで終了。実純増枚数は終了条件と混同せず未確定。
- 設定別機械割、50枚ベースは、P-WORLD / 5号機クロニクル / pacnk と表記・検索語を変えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。5号機クロニクルも本機の機械割欄が空欄。

### v0.7 resetBehavior — ゴールデンベルE

- ノーマル/ボーナス主体で、通常ゲーム数天井・RT/ART/AT/CZ・長期ゲーム数モードは確認されない。
- よってゲーム数天井カウンタ、リセット短縮天井、RT/ART状態リセットは `NOT_APPLICABLE`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 設定変更/据え置き/単純電源OFF→ON時のリール挙動、初期出目、ランプ、ガックン等の本機固有変更判別は、機種名・型式8S1379・ベルコ・ベルシリーズと検索語を組み替えても直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用当選率、リセット恩恵率、短縮天井、設定変更固有ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_NO_CEILING_OR_GAMEPLAY_STATE_MACHINE_SPECIFIC_CHANGE_DETECTION_POWER_BEHAVIOR_UNVERIFIED`。

## 411. スモモチャン（直前）

record:
- `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`

machine record commit:
- `980569219f8e56b568262bf7a317574c0c6a95a8`

要点:
- ニューギン / スモモチャンV / 検定9S0445。
- releaseDateは **CONFLICT — 2009-10-01 K-Naviホール導入開始 / 2009-10-12 当時業界資料の納品予定**。
- P-WORLD主系列の機械割 95.9〜105.1%、BIG 1/287.44→1/268.59、REG 1/455.11→1/268.59、合算1/176.2→1/134.3。
- 50枚ベースは約34.5〜35.8Gレンジのみ。
- resetBehaviorは天井/RT/ART/AT/CZ非該当。ホール選択告知音モードによる設定変更推測の直接記載あり、具体保持/初期化条件は未確認。

## 410. 銀河英雄伝説

record:
- `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`

machine record commit:
- `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`

要点:
- 2009-09-28導入、ミズホ、ボーナス+ART。
- ART純増約+2.0枚/G、通常ART間1600G天井。
- K-Naviに設定変更時天井短縮を示す攻略項目存在。具体数値未回収。

## 409. パチスロ交響詩篇エウレカセブン

record:
- `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`

machine record commit:
- `974821dbe62d72e51494278c1aad019f5b754fcb`

要点:
- 設定変更後は内部高確スタートを旧解析で直接確認。
- 通常時909Gで天井ART3セット以上。

## resetBehavior遡及QA

既補完確認済み:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G
- スロ原人

直近QA:
- `docs/real_machine_db/machines/2006-10_surogenjin.md`
- QA commit: `3194bc98054c649f7d841525dca97f30b22258a0`
- 次はrepo実ファイルを時系列順に走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **412件地点 / ゴールデンベルEまで収録**から再開。
2. ゴールデンベルEの全国導入具体日は未確定なので、2009-10-02〜10-12境界について、他の月精度機を具体日機より誤って前へ置かないよう再監査を続ける。
3. 現時点で具体日を高信頼確認済みの次候補は SANKYO **`KODA KUMI PACHISLOT LIVE IN HALL II` — K-Naviホール導入開始 2009-10-13**。repo未登録を再確認してから413候補として処理する。
4. ただし `ハイパールーレット` は当時業界資料で10月中旬納品、`パチスロ遠山の金さん` も10月中旬予定なので、10/13より前の具体日を確定できる資料がないか先に最終監査する。
5. 10/19群として `球児2`、`GS美神極楽大作戦!!`、`マジックスパイス`、`ダブルアタック`、`パチスロ エイリアンVSプレデター` などを確認済み。ただし納品日/ホール開始日の資料差は個別に保持し、具体日順で処理する。
6. `青ドン〜花火の極〜` はP-WORLD月次では10月側に見えるが、当時業界資料は11/3納品開始、K-Naviは11/4ホール導入開始を示すため10月本線へ前倒ししない。
7. 候補ごとに性能コア＋v0.7 resetBehaviorを同時収集。欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
8. 競合値は平均せず `CONFLICT`。後継/同名別機種の数値を転用しない。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はスロ原人直後の最初のv0.7未補完既存レコードを実ファイル順で特定。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイルだけでなく履歴/contents APIでも未登録確認し、検索index遅延による重複を避ける。
- 性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 412 ゴールデンベルE: `docs/real_machine_db/machines/2009-10_golden-bell-e.md`
- machine record commit: `5d8618a6746013a8b86f03ad6ea56e547fec7d33`
- 本 `LATEST_HANDOFF.md` を412件地点へ更新。
