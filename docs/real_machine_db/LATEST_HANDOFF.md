# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **493**
- latestMachineAdded: **コード・ルージュ**（ネット / 2010-06-21）
- latestRecord: `docs/real_machine_db/machines/2010-06-21_code-rouge.md`
- chronologicalFrontier: **2010-06-21**
- frontierLatestMachine: **コード・ルージュ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前492「戦国物語-猛虎激闘絵巻-」を再取得。
- `INDEX.md` は旧地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **492** / chronologicalFrontier **2010-06-14**。
- パチビー2010年6月月間導入一覧を再監査。6/15はパチンコのみ、6/16〜20に新規パチスロ掲載はなく、次の明確なパチスロ導入群は6/21「コード・ルージュ」「恐怖新聞～第二章～」。
- repo検索で「コード・ルージュ」未登録を確認後、6/21同日群の先頭として493件目に追加。

## 493 — コード・ルージュ 要約

- メーカー: **ネット**
- 導入: **2010-06-21**（パチビー機種ページ / 月間導入一覧）
- 世代/タイプ: **5号機 / ボーナス+押し順ART / ストックART / 無限ART搭載**
- 機械割主系列（当時パチマガスロマガ）: **97.5 / 99.5 / 101.5 / 104.0 / 106.5 / 111.0%**
- 後年5号機クロニクルは設定6=110.0%だが、同ページのゲーム性説明に本機と整合しない情報が混在するため、主系列へ平均せず汚染疑いの競合として保持。
- BIG: 設定1〜3 **1/1149**、設定4〜6 **1/1040**
- REG合成: **全設定1/152**
- ボーナス合成: 設定1〜3 **1/134**、設定4〜6 **1/132**
- ART初当たり: **1/389.1 / 1/322.7 / 1/323.3 / 1/267.2 / 1/264.7 / 1/206.2**
- ボーナス+ART合成: **1/99 / 1/94 / 1/95 / 1/88 / 1/88 / 1/80**
- ART DRIVE: **40G / 約+1.8枚/G**、1回の抽選で最大10セットの可能性。
- SUPER ART DRIVE: 次回ボーナスまでの無限ART、ボーナス後も**約50%ループ**。
- 基本獲得: SBB/BIG **約114枚**、BB/REG相当 **約36枚**（資料間で呼称差、枚数は一致）。
- 通常状態: **通常 / 高確 / 超高確**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- 通常ゲーム数天井: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED**。存在を推測しない。
- formalModelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**。

## resetBehavior v0.7 — コード・ルージュ

- **設定変更**: 通常/高確/超高確の再セット先、ARTストック・潜伏ART・前兆の消去/保持は、本機固有の直接解析本文を十分再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 内部状態・ARTストック・潜伏/前兆の引継ぎ処理は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 内部状態、ARTストック、潜伏/前兆、初期画面/リール等の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 高信頼な通常ゲーム数天井を確定できず、設定変更時のカウンタclear/retainも未確定。設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード・状態**: 通常/高確/超高確を確認。ただし設定変更時振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 専用高確/ART付与/短縮天井等は `NONE_CONFIRMED_AFTER_RESEARCH`。直接根拠のない既得状態消失も不利として断定しない。
- **変更判別**: 朝一/設定変更/据え置き/ガックン/十字架/シャッター/初期出目/ART潜伏まで再探索したが本機固有高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。P-WORLD掲示板のユーザー質問は解析根拠に昇格しない。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **PARTIAL_STATE_SYSTEM_CONFIRMED_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_RESET_NUMERICS_UNVERIFIED_AFTER_RESEARCH**。

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済み。
- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み。
- 直前handoffが次候補として挙げた `小野真弓のかわいい日本昔話` / `海童王` を今回repoコード検索で再確認したが、タイトル文字列から既存実レコードを一意確定できなかった。
- **存在・順序を推測してQA済みにしない**。確定遡及進捗は **ジャックと豆の木まで**を維持。
- 次回はmainのmachine tree / commit履歴 / 2006-11〜12実レコード群から「ジャックと豆の木」直後に実在する最初の `resetBehavior` 欠損ファイルをパスで確定してから補完する。

## 主要出典（取得日 2026-09-03）

### コード・ルージュ
- パチビー機種ページ: `https://www.pachibee.jp/machines/about/210050003`
- パチビー2010年6月導入一覧: `https://www.pachibee.jp/machines/schedule/2010-06`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5958`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/a.php`
- パチマガスロマガ ボーナス抽選確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/h.php`
- 5号機クロニクル NET一覧: `https://5goki.com/net`（本機説明の混在疑いがあるため補助/競合検知のみ）

## 今回のGitHub更新

- 493 コード・ルージュ追加: commit `55b5b473b758b8eabaf7151201f0de60fecd9e2f`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 493 / chronologicalFrontier 2010-06-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-21同日群を継続**し、未登録確認後 **「恐怖新聞～第二章～」** を494件目の第一候補として性能コア＋v0.7 resetBehaviorを収集する。
3. 6/21同日群を別系統の導入一覧/K-Navi/P-WORLD/当時業界資料でも閉じ、未登録がなければ次の具体導入日群へ前進する。
4. コード・ルージュの `formalModelName` / `approvalNumber` / `baseGamesPer50` / reset詳細は今回十分再探索後も未確定。後続QAで公的検定資料・保存アーカイブ・当時解析本文に直接値が見つかれば補完する。
5. 遡及QAは **ジャックと豆の木まで確定補完済み**。machine tree / commit履歴からその直後の実在resetBehavior欠損ファイルをパスで確定して補完する。`小野真弓のかわいい日本昔話` / `海童王` は実レコード存在・順序を確定するまで推測更新しない。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。