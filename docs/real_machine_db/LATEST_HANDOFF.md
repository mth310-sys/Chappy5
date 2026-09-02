# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **432**
- latestMachineAdded: **ネオン物語**（2009年11月月次監査で判明した遡及漏れ補完）
- latestRecord: `docs/real_machine_db/machines/2009-11-17_neon-monogatari.md`
- chronologicalFrontier: **2009-11-23 / 剣豪（429）**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、直前 `LATEST_HANDOFF.md`、既存431番レコード `2009-11-16_salamander-beam.md` を再読。
- INDEX本体は古い19件地点のまま。README規定どおり、INDEXより新しい `LATEST_HANDOFF.md` と実ファイルを進捗正本として優先。
- 作業開始時mainは431件。直前handoffの次候補 `ネオン物語` をrepoコード検索し、既存レコードなしを確認。
- 追加直前にもmainのLATEST_HANDOFFを再取得し、431件地点のままで他リレー競合がないことを確認。
- PachiBeeで **2009-11-17導入**、P-WORLDで型式 `ネオン物語`・検定番号 `9S0312`・2009年11月導入を確認し、432件目として遡及追加。
- `ネオン物語 / 中京遊技 / 9S0312` と性能語、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 700G / 天井 / 天井短縮 / CZ / RT / モード / 状態 / ガックン / 初期出目 / 変更判別` を組み替え、P-WORLD、PachiBee、旧パチマガスロマガ、pacnk、CrankySeven、当時/後年回顧を横断した。

## 432 — ネオン物語 要約

- メーカー: **中京遊技**
- 導入日: **2009-11-17**（PachiBee。P-WORLDは2009年11月の月粒度）
- 型式: **ネオン物語**
- 検定番号: **9S0312**
- 世代: **5号機**
- システム: **ボーナス+RT / CZ経由RT / 700GでCZ到達**
- ボーナス合算: **1/206.1 / 1/188.9 / 1/178.1 / 1/163.0 / 1/156.8 / 1/149.9**
- 設定別機械割: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガのPAYOUT欄自体が「現在調査中」で、他資料でも比較可能な系列を確定できず。
- BIG/MB/SB個別設定別確率: **UNVERIFIED_AFTER_RESEARCH**。3種類搭載は確認するが、設定別個別値は確定できず。
- 50枚ベース: **設定1 37G ～ 設定6 39G**。中間設定個別値は未確認のため補間せず。
- BIG最大約**270枚**（348枚払い出し） / MB最大約**207枚**（264枚払い出し） / SBまたはREG相当最大約**110枚**（137枚払い出し）。
- RT「ラブラブタイム」: **30Gまたは100G / 純増約+0.5枚/G**。
- RT終了後はCZへ戻り、P-WORLD/PachiBeeはRT約70%ループと説明。
- 旧パチマガのRT突入期待度: BIG後約70% / MB後約30% / REG後約15%。
- 通常時**700G消化でCZへ移行**。直接ボーナス/RT確定ではなくCZ到達天井として定義を分離。

## resetBehavior v0.7 — ネオン物語

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。700G進捗、CZ、RT状態の設定変更時処理を本機固有に示す直接資料を確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。通常時700Gまでの内部ゲーム数、CZ/RT状態の引継ぎを直接確認できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。700Gカウンタ、CZ/RT状態、リール/表示の本機固有復帰挙動を確認できず。
- **ゲーム数/天井**: 通常時700GでCZ移行は直接確認。設定変更時のリセット/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- **リセット短縮天井**: `UNVERIFIED_AFTER_RESEARCH`。700Gから短縮/変更される公開値を確認できず。
- **モード**: 設定変更専用/朝一専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- **状態**: CZ/RT状態は存在するが、設定変更/据え置き/電断時の再抽選・引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、リール、ランプ、液晶、朝一挙動まで再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 短縮天井、モード振分、朝一当選率、リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## データ品質メモ

- ボーナス合算はP-WORLD、旧パチマガスロマガ、pacnk、回顧資料で一致。
- 旧パチマガの本機専用PAYOUTページは数値が「現在調査中」。CrankySevenや回顧資料の機械割欄も空欄で、推定は行っていない。
- 50枚ベースは旧パチマガで設定1 37G〜設定6 39Gを直接確認。ただし設定2〜5の個別値は現存取得情報では読めず補間しない。
- 第3ボーナスはP-WORLDが `SB`、旧パチマガのRT突入期待度説明では `REG` と表記。約110枚の小ボーナスを指す可能性が高いが、名称定義差として保持。
- リセット関連では旧パチマガ本機トップに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、具体本文を検索取得できず、設定変更一般論で埋めていない。

## 境界監査で維持する分類修正

### パチスロ本線から除外
- `妖怪人間ベム`（2009-11-23）: PachiBee/P-WORLD系資料でCRパチンコを確認。
- `風雲新撰組`: P-WORLD 2009年11月一覧ではCRパチンコ分類。
- `新大江戸日記～月夜に咲く華～`: P-WORLD 2009年11月一覧でCR機分類。

同名の独立したパチスロ型式が確認されない限り本線へ入れない。

## resetBehavior 遡及QA進捗

- 既存レコードの遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 主要出典（取得日 2026-09-03）

- PachiBee ネオン物語: `https://www.pachibee.jp/machines/about/209110012`
- P-WORLD ネオン物語: `https://www.p-world.co.jp/machine/database/5763`
- 旧パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/a.php`
- 旧パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/h.php`
- 旧パチマガスロマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/c.php`
- 旧パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/chukyoyugi_slot_01.php`
- pacnk ネオン物語: `https://pacnk.com/slot/tools/sh_neonstory.html`
- CrankySeven ネオン物語: `https://crankyseven.com/neonstory-pc.htm`
- 回顧資料: `https://pachinko.hatenablog.jp/entry/2009/11/neonMonogatari`

## 次回再開地点

1. **recordCount 432 / chronologicalFrontier 2009-11-23**。431 `サラマンダー`（11/16）と432 `ネオン物語`（11/17）は月次監査で判明した遡及漏れ補完。
2. 次は **2009-11-17同日群を最終監査**し、同日以前にさらに未登録パチスロがないか確認する。
3. その後 **2009-11-18〜11-23** をP-WORLD月次一覧、PachiBee、当時業界記事、メーカー一覧とmachine treeで突合し、chronologicalFrontier `2009-11-23 / 剣豪` までの未登録漏れを閉じる。
4. `妖怪人間ベム / 風雲新撰組 / 新大江戸日記～月夜に咲く華～` はCR分類確認済み。同名別パチスロ型式が独立確認されない限り追加しない。
5. 11/23以前の漏れを閉じたら **2009-11-24〜11-30** へ前進する。既に登録済みの11/24以降機を重複追加しないようrepo検索と実ファイル確認を必須とする。
6. 追加・修正前に必ず最新main・LATEST_HANDOFFを再取得し、他リレーの進行を取り込む。
7. 性能コア＋resetBehavior v0.7を同じ基準で収集し、競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
8. 完全再現用の詳細内部抽選は収集対象外。
