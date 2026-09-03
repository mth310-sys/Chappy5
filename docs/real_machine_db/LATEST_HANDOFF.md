# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **436**
- latestMachineAdded: **爆走列島**
- latestRecord: `docs/real_machine_db/machines/2009-12-14_bakusou-rettou.md`
- chronologicalFrontier: **2009-12-14**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、最新435 `2009-12-07_tetsuya-shinjuku-vs-ueno.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは435件 / chronologicalFrontier 2009-12-07。
- 2009-12-07同日群と12-08〜12-13境界を、PachiBee / P-WORLD / 当時業界記事 / 旧解析 / メーカー別後年一覧で再監査。12-08〜12-13は発表日記事は存在するが、今回本線へ追加すべき具体ホール導入日の未登録パチスロを確定できず。
- 直前handoffで後続候補に指定されていた `爆走列島` をrepo既存パス確認し未登録を確認。
- PachiBeeがホール導入日を2009-12-14と明示。当時遊技通信転載の2009-11-16は発表日として分離。
- 旧パチマガ、P-WORLD、PachiBee、5号機クロニクル、pacnk、当時業界転載を横断し、性能コア＋resetBehavior v0.7を収集。
- 追加直前にLATEST_HANDOFFを再取得して435件地点のままで競合がないことを確認し、436件目として追加。

## 436 — 爆走列島 要約

- メーカー: **SNKプレイモア**
- ホール導入: **2009-12-14**（PachiBee）
- 発表: **2009-11-16**（当時遊技通信転載）
- 世代: **5号機**
- システム: **A+ART / 完走型ART / CZ / ナビストック**
- ボーナス合成: **1/266.41 → 1/189.41**
- 50枚ベース: **34.76G（設定1〜5） / 36.23G（設定6）**
- ART「スゴロクタイム」: **50G / 約+1.2枚/G**
- 爆走ボーナス約255枚 / 赤7・青7BIG約125枚
- CZ自力ART突入: **35.7%（旧パチマガ） / 約36%（P-WORLD）**

## 機械割

- **96.6 / 98.2 / 100.1 / 104.3 / 107.5 / 111.2%**
- 旧パチマガ直接値、5号機クロニクル、pacnkの系列が一致。今回明確なCONFLICTなし。

## 天井・resetBehavior v0.7

- **ゲーム数天井**: ボーナス&ART間**999G**で天井CZ（pacnk）。
- **設定変更**: `PARTIAL_CONFIRMED`。
  - 天井までのゲーム数は**設定変更後も引き継ぐ**。
  - ARTナビストックは**設定変更で消滅**。
- **据え置き**: `PARTIAL_CONFIRMED_FOR_CEILING`。少なくとも天井進捗は設定変更でも消えない構造。純粋な据え置き時のCZ/ART状態・ナビストック保持範囲を明記した別系統資料は未回収。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。999G進捗、CZ/ART、ナビストック、初期リール状態の本機固有直接資料を確定できず。
- **gameCounterReset**: `NOT_RESET_BY_SETTING_CHANGE / CARRIED_OVER`。
- **ceilingAfterReset**: 短縮ではなく通常999Gへの進捗引継ぎ。リセット専用別天井値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **modeAfterReset**: 朝一専用モード・設定変更時モード振分は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **stateAfterReset**: ナビストック消滅のみ直接確認。CZ滞在・ART中・無限ART等の変更時処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 前日天井ハマリ進捗を設定変更でも保持するため宵越し価値が残る。
- **朝一不利**: ARTナビストックは設定変更で消滅。
- **変更判別**: ガックン、初期出目、液晶/CZ表示等は `UNVERIFIED_AFTER_RESEARCH`。天井ゲーム数だけでは設定変更/据え置き判別にならない。
- **公開朝一数値**: 設定変更専用モード振分・朝一当選率・リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- PachiBee: `https://www.pachibee.jp/machines/reach/209110014`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5767`
- 旧パチマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/a.php`
- 旧パチマガ PAYOUT/ボーナス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/h.php`
- 旧パチマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/c.php`
- 旧パチマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/snk_slot_27.php`
- 5号機クロニクル SNKプレイモア一覧: `https://5goki.com/snkplaymore`
- pacnk: `https://pacnk.com/slot/tools/sh_bakuso.html`
- 当時遊技通信転載（Pマンズ）: `https://p-mans.blogspot.com/2009/11/`
- パチ7 SNKプレイモア史: `https://pachiseven.jp/articles/detail/11157`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 次回再開地点

1. **recordCount 436 / chronologicalFrontier 2009-12-14**。
2. まず **2009-12-14同日群の残件監査**を継続。
3. 初代 **`バジリスク ～甲賀忍法帖～`** はK-Naviで **2009-12-14ホール導入開始**を確認済み。repo既存パス候補 `docs/real_machine_db/machines/2009-12-14_basilisk-kouga-ninpouchou.md` は追加前確認時点でNot Foundだったため、次の有力未処理候補。
4. 同日群には他機種が存在する可能性があるため、PachiBee / P-WORLD / K-Navi / 当時業界記事 / メーカー一覧で12-14を閉じてから12-15以降へ進む。
5. `パチスロあしたのジョー`、`元祖！大江戸桜吹雪` は2009-12-10前後に発表記事があるが、発表日を導入日に流用しない。具体ホール導入日を確定してから本線へ置く。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. 性能コア＋resetBehavior v0.7を同基準で収集。競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
8. 完全再現用の細かな内部抽選は対象外。
