# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **430**
- latestMachineAdded: **ワンバー1A-30**（月次境界監査で判明した遡及漏れ補完）
- latestRecord: `docs/real_machine_db/machines/2009-11_onebar-1a-30.md`
- chronologicalFrontier: **2009-11-23 / 剣豪（429）**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainのREADME、最新ミッションv0.7、INDEX、既存429番レコード `剣豪`、直前LATEST_HANDOFF、直近コミットを再読。
- INDEX本体は古い19件地点のまま。README規定どおり、INDEXより新しい `LATEST_HANDOFF.md` と実ファイルを直近の正本進捗として優先。
- 作業開始時mainは429件 / `剣豪`。直前HANDOFFの次候補 `妖怪人間ベム` を再分類した結果、2009-11-23の対象は**CRパチンコ機**であり本パチスロDB本線から除外。
- 同じHANDOFFで保留されていた `風雲新撰組`、11月末候補 `新大江戸日記～月夜に咲く華～` もP-WORLD月次分類ではCRパチンコ側にあり、パチスロ候補として無条件追加しない。
- 2009年11月のパチスロ月次一覧を再監査し、ベルコ公式に存在する `ワンバー1A-30` がrepo検索で未登録だったため、時系列漏れとして430件目に遡及追加。
- `ワンバー1A-30 / ワンバーワン1A-30 / ONE BAR / ベルコ` と `機械割 / 出玉率 / BIG / REG / ART初当たり / 50枚 / 1000円 / ベース / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 変更判別` を組み替え、公式・旧DB・一覧/回顧資料を横断。
- 2012年以降の `ニューワンバー-30`、2017年 `ワンバーワン-30/-25`、2020年 `ワンバーS-30` の性能/reset仕様は流用していない。

## 430 — ワンバー1A-30 要約

- メーカー: **ベルコ**
- 導入時期: **2009-11（月粒度・ベルコ公式）**
- 世代: **5号機**
- システム: **ART / 30Φ**
- ベルコ公式キャッチコピー: `ワンバー再上陸!`
- 設定別機械割: **UNVERIFIED_AFTER_RESEARCH**
- 主要初当たり: **UNVERIFIED_AFTER_RESEARCH**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART純増数値: **UNVERIFIED_AFTER_RESEARCH**（ART機であること自体はOFFICIAL）
- 基本獲得枚数: **UNVERIFIED_AFTER_RESEARCH**
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: `PARTIAL_IDENTITY_TYPE_AND_RELEASE_MONTH_CONFIRMED_CORE_NUMERICS_UNVERIFIED_RESET_BEHAVIOR_UNVERIFIED`

## resetBehavior v0.7 — ワンバー1A-30

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **ゲーム数/天井**: 通常天井の存在・設定変更時クリア/引継ぎとも `UNVERIFIED_AFTER_RESEARCH`
- **リセット短縮天井**: `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井の不存在を意味しない。
- **モード/状態**: `UNVERIFIED_AFTER_RESEARCH`
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: ガックン、初期出目、ランプ、液晶、朝一挙動を含めて再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`
- **公開朝一数値**: モード振分、短縮天井、朝一当選率、恩恵発生率とも `NONE_CONFIRMED_AFTER_RESEARCH`

## 境界監査での分類修正

### パチスロ本線から除外
- `妖怪人間ベム`（2009-11-23）: パチビー/旧パチマガで**CRパチンコ**を確認。直前HANDOFFの「高砂の次パチスロ候補」は誤候補。
- `風雲新撰組`: P-WORLD 2009年11月一覧では `CR風雲新撰組` 各スペックとしてパチンコ分類。パチスロ本線へ追加しない。
- `新大江戸日記～月夜に咲く華～`: P-WORLD 2009年11月一覧でCR機として分類。パチスロ候補から外す。

### 月次一覧から要監査のパチスロ候補
P-WORLD 2009年11月月次一覧ではパチスロ12機種が確認される。既存登録済み機と実ファイルを突合し、検索indexだけで未登録判定しないこと。

特に次回優先:
1. **ネオン物語**（中京遊技） — PachiBeeで2009-11-17導入、P-WORLDで5号機RT/CZ/天井、repo検索ではヒットなし。実ファイル/履歴でも重複確認後、漏れなら次の遡及追加候補。
2. **サラマンダー** — P-WORLD 2009年11月パチスロ一覧に存在、repo検索ヒットなし。具体導入日・メーカー・既存実ファイル有無を先に確定し、ネオン物語との時系列を比較する。
3. `青ドン~花火の匠~ / スーパービンゴSP3 / どんまい!!ちゅ~吉 / タイムレスキューS / Rio2プレミアム / 島唄 / 剣豪 / アイアムコニシキ` 等、月次12機種全体をmachine tree/履歴基準で突合し、既存なら再収集しない。

## resetBehavior 遡及QA進捗

- 既存レコードの遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、次回以降machine tree/コミット履歴を実ファイル基準で時系列走査し、2006-10以降の最初のresetBehavior欠損機を特定してQAを再開する。
- 既存性能コアを無駄に再調査せず、resetBehaviorのみ遡及補完する。

## 主要出典（取得日 2026-09-03）

- ベルコ公式 パチスロ機種一覧: `https://www.s-bellco.co.jp/products/slot/`
- スロリスクタイム 5号機一覧: `https://pachisuro100.com/itiran/`
- スロリスクタイム わ行一覧: `https://pachisuro100.com/wagyo/`
- パチビー `CR妖怪人間ベム`: `https://www.pachibee.jp/machines/about/111020003`
- 旧パチマガスロマガ `CR妖怪人間ベム`: `https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/abilit_pachi/025/p_dai.php`

## 次回再開地点

1. **recordCount 430 / chronologicalFrontier 2009-11-23**。ただし11月月次監査で遡及漏れが残っている可能性が高いため、前進前に11月1〜23日のパチスロ12機種一覧と実ファイルを突合する。
2. 最優先は **サラマンダーの具体日・メーカー・実ファイル有無** と **ネオン物語（PachiBee 2009-11-17）の実ファイル/履歴重複確認**。両者のうち時系列が早い未登録機を431として追加する。
3. `妖怪人間ベム / 風雲新撰組 / 新大江戸日記～月夜に咲く華～` はCRパチンコ分類を確認済みのため、同名の別パチスロ型式が独立して確認されない限り本線へ入れない。
4. 11月23日以前の漏れを閉じてから11月24〜30日へ前進し、12月へ接続する。
5. 追加・修正前に必ず最新main・LATEST_HANDOFF・直近コミットを再取得し、他リレーの進行を取り込む。
6. 性能コア＋resetBehavior v0.7を同じ基準で収集し、競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
7. 完全再現用の詳細内部抽選は収集対象外。
