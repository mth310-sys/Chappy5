# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **522**
- latestMachineAdded: **ジャイアン～情熱のタイ編～**（ラスター / ニューアーク発表・販売 / 全国一斉導入基準 2010-10-18）
- latestRecord: `docs/real_machine_db/machines/2010-10-18_jaian-jounetsu-no-thailand.md`
- chronologicalFrontier: **2010-10-18**
- frontierLatestMachine: **ジャイアン～情熱のタイ編～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **521** / chronologicalFrontier **2010-10-18** / latestMachineAdded **舞-HiME**。
- 2010-10-18同日群の未処理「ジャイアン～情熱のタイ編～」をrepo重複確認後に522件目として追加。
- 2010-10-19〜24境界を再監査し、K-Navi 2010年10月導入カレンダーでも10月25日はパチスロ新規掲載なし（パチンコのみ）。次の未処理パチスロ節点は11月側を含めて再監査する。
- 遡及QAは `docs/real_machine_db/machines/2006-11_kaidouou.md`（怪胴王）を処理し、resetBehavior v0.7を追加。性能コアの既存判定とreset QAを分離した。

## 522 — ジャイアン～情熱のタイ編～

- メーカー: **ラスター**（当時ニューアークが発表・販売。役割分離）
- 全国一斉導入基準: **2010-10-18**（K-Navi）
- 世代/タイプ: **5号機 / BIG + 押し順ART / CZ / 天井**
- 機械割: **96.0 / 98.6 / 101.3 / 105.1 / 109.0 / 115.3%**
- BIG: **1/281.3 → 1/240.1**
- ART初当たり: **1/223.4 → 1/152.7**
- BIG+ART合成: **1/124.5 → 1/93.3**
- 50枚/1000円: **約34G**
- ART「ジャイアンボーナス」: **1セット50G / 約+1.43枚/G / 1契機最大10セット**
- BIG: **約174枚**
- チャンス目: **約1/100.52**、成立後は平均約8GのCZ
- 天井: **BIG間1840G以降で天井ART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — ジャイアン

- パチマガスロマガに本機専用「朝イチ・設定変更」項目が存在することは確認したが、現存検索結果から本文を回収できず。
- **設定変更時のBIG間1840G天井カウンタclear/retain、ARTストック、CZ/RT状態の初期化内容はUNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から推測しない。
- 据え置き時のBIG間天井G・ARTストック・CZ/RT状態の引継ぎは **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時のBIG間天井G・ARTストック・CZ/RT状態・液晶/ランプ初期状態は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一専用モード振り分け、朝一ART確率、設定変更固有の恩恵/不利は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプ等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## CONFLICT / 注意 — ジャイアン

- メーカー表記はP-WORLD「ラスター」、当時グリーンべるとではニューアークがラスターとの業務提携第2弾として発表。製造メーカー=ラスター、発表/販売ブランド=ニューアークとして役割分離し、数値CONFLICTとは扱わない。
- formalModelName / inspectionNumber は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。

## 主要出典 — ジャイアン（取得日 2026-09-04）

- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4158/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6113`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/newark_slot_02.php`
- パチマガスロマガ基本ゲーム性: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/a.php`
- パチマガスロマガ設定別確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/h.php`
- パチマガスロマガ小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/c.php`

## 遡及QA — 怪胴王

対象: `docs/real_machine_db/machines/2006-11_kaidouou.md`

- formalModelName: **爆裂王2**。
- 既存性能コアはPARTIALのため不用意な完了判定変更をせず、reset QA状態を別管理。
- ハマリ救済として、**規定ゲーム数到達で次回ボーナスまでAT**となる仕様を当時業界記事で再確認。ただし具体的規定G数は高信頼値未確定。
- 設定変更時の救済進捗、AT権利/残G、内部RT状態のclear/retainは直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き、単純電源OFF→ON、設定変更判別、公開朝一数値も本機固有の確定資料を回収できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機初期のため **NOT_APPLICABLE**。
- AT純増は当時業界記事 **約+1.2枚/G** と攻略資料 **約+1.1枚/G** を平均せずCONFLICT保持。
- 機械割設定2は **98.2%（pacnk） / 98.7%（後年回顧）** をCONFLICT保持。設定1/3/4/5/6は 95.2 / 100.8 / 104.0 / 106.9 / 109.6%。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

### 怪胴王 主要出典（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00004874/`
- P-WORLD / グリーンべると転載: `https://news.p-world.co.jp/articles/1904/greenbelt`
- HAZUSE: `https://hazuse.com/i/data/kaidouou/top.htm`
- CrankySeven: `https://crankyseven.com/kaidouou-pc.htm`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/27/a.php`
- pacnk: `https://pacnk.com/slot/tools/sh_kaidouou.html`
- pachinko's blog: `https://pachinko.hatenablog.jp/entry/2006/11/kaidou-oh`

## 今回のGitHub更新

- 522 ジャイアン～情熱のタイ編～追加: `docs/real_machine_db/machines/2010-10-18_jaian-jounetsu-no-thailand.md`
- 怪胴王 resetBehavior v0.7 QA追補: `docs/real_machine_db/machines/2006-11_kaidouou.md`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王まで補完済み**。
- 次回はmachine treeの実パス順を再確認し、`2006-11_kaidouou.md`直後の**最初の実在resetBehavior欠損レコード**を特定して処理する。タイトル推測でQA済み範囲を進めない。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 522 / chronologicalFrontier 2010-10-18**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. 2010-10-19〜31境界を再監査。K-Navi 2010年10月カレンダーでは10月25日に新規パチスロ掲載なしのため、11月導入カレンダー・P-WORLD・当時業界記事を照合し、**2010年11月側の最古未登録機**を523件目候補として確定する。
3. 同日群が複数ある場合は導入日/納品日定義を分離し、repo重複監査後に時系列で追加する。
4. 遡及QAは **怪胴王直後の最初の実在resetBehavior欠損machine pathの確定**から再開する。
5. PARTIAL/UNVERIFIEDとreset欠損は検索語・資料系統を変えて十分再探索し、競合は平均せずCONFLICT、推測補完しない。
