更新日: 2026-09-12

## 現在地点
- recordCount: **1405**
- latestRecordAdded: **デジスロ — No.1405**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-19_digislo.md`
- chronologicalFrontier: **2021-04-19**
- frontierLatestMachine: **デジスロ — No.1405**
- schema: **resetBehavior v0.7**
- status: **2021-04-19_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1404「パチスロAngel Beats!」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainは前回会話時点より先行しており、実際の再開点はNo.1404完了後の **デジスロ**。これをNo.1405として追加。
- 業界記事・検定通過記事・P-WORLD・HAZUSE・1geki・パチマガスロマガ・複数解析を横断し、性能コアとresetBehavior v0.7を同時収集。
- 本機は天井・AT/ART/CZ・周期/規定G数モードを持たないリアルボーナス主体ノーマル機。これらのreset項目は `NOT_APPLICABLE` とし、設定変更/純電断時の成立済みボーナスフラグ、初期出目、デジタル表示、ガックンなど本機固有契約のみ十分な再探索後に `UNVERIFIED_AFTER_RESEARCH` とした。
- 2021-04-19群は引き続きOPEN。既知候補6機のうち2機処理済み。
- 遡及resetBehavior QAは本線を優先したため今回は進めず、前回カーソルを維持。

## No.1405 — デジスロ
- path: `docs/real_machine_db/machines/2021-04-19_digislo.md`
- manufacturer: **ヤーマ（ベルコ系）**
- formalModel: **SデジスロA9**
- certificationNumber: **0S1483**
- releaseDate: **2021-04-19**
- generation/system: **6号機 / 6.1号機世代 / ノーマル・リアルボーナスAタイプ / 4段階設定**
- payoutRateBySetting: **97.5 / 100.0 / 102.9 / 106.6%**
- BIG: **1/276.5 / 276.5 / 274.2 / 267.5**
- REG: **1/420.1 / 346.8 / 312.1 / 267.5**
- 合算: **1/166.8 / 153.8 / 146.0 / 133.7**
- baseGamesPer50: **約41.2 / 42.1 / 43.0 / 44.5G**
- netIncrease: **NOT_APPLICABLE（AT/ART非搭載）**
- basicPayout: **BIG最大251枚 / REG最大107枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_CORE_RESET_SPECIFIC_INTERNAL_BEHAVIOR_UNVERIFIED**

### resetBehavior v0.7 — No.1405
- 設定変更: 天井・周期・AT/CZモード等は非搭載で `NOT_APPLICABLE`。成立済みリアルボーナスフラグ/初期出目/デジタル表示の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断: 天井やモード等の引継ぎ対象は非搭載。成立済みボーナスフラグ・出目・デジタル表示の保持契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井: 非搭載。リセット短縮天井も `NOT_APPLICABLE`。
- 有利区間: AT/ART非搭載のリアルボーナス機で、公開ゲーム性上、朝一判断へ使う有利区間/有利区間ランプ契約は確認されず `NOT_APPLICABLE_TO_PUBLIC_GAMEPLAY`。
- resetBenefits / penalties: 設定変更専用の定量的恩恵・不利は確認できず。
- resetDetection: 本機固有ガックン、初期出目、デジタル表示、ランプ等の変更判別は検索語・資料系統を変えても高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一専用数値: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## conflicts — No.1405
- スロぱちくえすとの本文要約部にBIGレンジ先頭 `1/278.5` と読める表記があるが、同ページの設定別表、P-WORLD、グリーンべると、1geki等は設定1BIG `1/276.5` で一致。`1/276.5` をcanonicalとし、平均化しない。
- 一部解析ページのベース説明に「設定1〜6」の表記があるが、本機は設定1〜4の4段階設定。スペック表と複数資料が1〜4で一致するため、段階表記のみ資料内表記揺れとして扱う。

## 2021-04-19群 — OPEN
1. **パチスロAngel Beats! — No.1404 / DONE**
2. **デジスロ — No.1405 / DONE**
3. **パチスロ マクロスデルタ — No.1406候補 / NEXT**
4. **ぱちスロ 沖ハナ-30 — 未処理**
5. **スーパーハナハナ — 未処理**
6. **スーパーハナハナ-30 — 未処理**

- status: **2021-04-19_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**
- 全6機処理後、全メーカー・地域機・25φ/30φ・PB・別型式・延期差を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-04-19群の **パチスロ マクロスデルタ** をNo.1406候補として処理する。
- その後 `ぱちスロ 沖ハナ-30` → `スーパーハナハナ` → `スーパーハナハナ-30` の順で既知キューを進める。
- 未処理追加機が監査で見つかった場合は導入日・型式を照合し、漏れ防止優先で同日群へ挿入する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 同レコードは既にresetBehavior PARTIALを持つため、既存性能値をやり直さずreset側だけ正式再探索する。

## GitHub保存
- No.1405追加 commit: `e4ac13a1ab9166e94767917fff510c5498405a2d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1405 デジスロ
- https://hazuse.com/machine/pachislot/0S1483/
- https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%883%E6%9C%881%E6%97%A5%EF%BC%89/
- https://news.p-world.co.jp/articles/15861/greenbelt
- https://www.p-world.co.jp/machine/database/9346
- https://1geki.jp/slot/s_digislo/
- https://1geki.jp/slot/s_digislo/3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/19/bn01-1.php
- https://hisshobon.news/analyze/1080/
- https://chonborista.com/slot/ya-ma/133131/
- https://www.slopachi-quest.com/article/digislo-settei/
