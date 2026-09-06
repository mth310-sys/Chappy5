# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **747**
- latestMachineAdded: **ドラゴンギャル～修羅の野望～**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2013-07-08_dragon-gal-shura-no-yabou.md`
- chronologicalFrontier: **2013-07-08**
- frontierLatestExactDateMachine: **ドラゴンギャル～修羅の野望～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-07-08_GROUP__NEXT_BOUNDARY_AUDIT_2013-07-09_TO_07-15__KNOWN_2013-07-16_PACHISLO_AKB48_ANCHOR**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-01_shinobidamashii-ii-rekka-no-sho.md` を再読。
- INDEXは19件地点の旧集約状態なのでREADME規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **746** / chronologicalFrontier **2013-07-01** / 07-01群CLOSED。
- 2013-07-02～07-07境界を導入一覧・当時記事・機種DBで監査。07-08より前の新たな未登録パチスロは今回確認できず。
- 前HANDOFFの次候補 **ドラゴンギャル～修羅の野望～** はrepoの同名レコード未登録を確認し、性能コア+resetBehavior v0.7を収集して747件目として追加。
- 2013-07-08導入列で同時に現れる「スーパー海物語IN沖縄3」「ラブ嬢プラス 今夜も、ご延長の方はいかがですか？」等はパチンコ機。特にラブ嬢プラスはK-Navi/グリーンべるとで `CRラブ嬢プラス` のパチンコ新機種と再確認し、本パチスロDBから除外。
- 07-08パチスロ同日群は今回の導入一覧横断で **ドラゴンギャル～修羅の野望～** 以外の未登録を確認できなかったため **CLOSED**。
- 次の具体日アンカーは **2013-07-16「ぱちスロAKB48」**。京楽の当時告知転載、後年機種DBとも7/16全国導入で一致。次回は先に07-09～07-15境界を全メーカー横断監査する。

## 今回追加 — ドラゴンギャル～修羅の野望～

### identity / 性能コア

- manufacturer: **SNKプレイモア**。
- 型式名: **ドラゴンギャル3D** / 検定番号 **3S0201**。
- releaseDate: **2013-07-08**。HAZUSE、後年SNK実機アプリ紹介で具体日一致。当時業界記事は7/7納品予定。
- generation/system: **5号機 AT / ゲーム数解除+自力CZ / ダブルAT**。
- 機械割: **97.2 / 98.9 / 100.3 / 104.8 / 109.3 / 113.8%**。パチマガスロマガとP-WORLDで一致。HAZUSE整数値は丸め差。
- 闘BONUS: **1/269.4 / 258.4 / 252.5 / 227.7 / 225.8 / 203.6**。
- 天RUSH: **1/561.1 / 539.8 / 492.1 / 429.3 / 371.4 / 342.5**。
- AT合成: **1/182.0 / 174.7 / 166.9 / 148.8 / 140.4 / 127.7**。
- baseGamesPer50: **約31G/50枚**。2013年導入前試打レポート系の「31G/千円」。別高信頼精密系列は未取得のため `PERIOD_ANALYSIS_SINGLE_APPROXIMATE`。
- 闘BONUS: **30G / 約+2.8枚/G / 継続率50～90%**。
- 天RUSH: **40G+α / 約+2.8枚/G**。
- CZドラゴンチャンス: **10G+開門 / AT期待度約35%**（P-WORLD）。
- 通常時最大天井: **1280G**。2013年試打情報と後年天井DBで照合。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- HAZUSE本機専用解析で **設定変更時に内部モード・ゲーム数テーブル再抽選**。
- 設定変更後の液晶は **繁華街ステージ（昼）**から開始。
- HAZUSEは **通常時の単純電源ON/OFF時も同じ繁華街（昼）から開始**と明記。よって朝一開始ステージ単独では設定変更と電源再投入のみを判別できない。
- 2-9伝説の天井狙い一覧で本機は **「闘ボーナス間590 宵×」**。590Gは天井ではなく狙い目。`宵×`分類を設定変更時の天井G進捗CLEARの支持資料として使用。
- 設定変更専用の固定短縮天井、CZ/AT確定、公開された具体モード振り分け率: **NONE_CONFIRMED / UNVERIFIED_AFTER_RESEARCH**。
- 設定据え置き時のゲーム数テーブル・モード・天井進捗をどの粒度で保持するかは、本機固有の直接契約を完全固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更CLEARから自動推定しない。
- 単純電源OFF→ONについて、**液晶表示ステージの再設定は確認済み**だが、内部モード・ゲーム数テーブル・天井進捗までどう扱うかは直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/リール出目/ランプ等の本機固有変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBehaviorQA: **RESEARCHED_WITH_HIDDEN_POWER_CYCLE_AND_EXACT_CARRYOVER_GAPS**。

## 境界監査 2013-07-02～07-08

- 07-02～07-07: 今回の導入一覧・当時記事横断で新規未登録パチスロを確認せず。
- 07-08: **ドラゴンギャル～修羅の野望～**を追加。
- 同日候補の「ラブ嬢プラス」は `CRラブ嬢プラス` のパチンコ機と確認し除外。
- 「スーパー海物語IN沖縄3」もパチンコ機のため除外。
- よって **2013-07-08群CLOSED**。

## 遡及resetBehavior QA 進捗

- 前HANDOFFのQAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線の747件目追加と07-08群閉鎖を優先し、QAカーソル自体は進めていない。
- 次回も本線を止めず、余力があれば実ディレクトリ順で最初のresetBehavior欠損/PARTIAL再探索対象を一意に確定する。

## 次回再開地点

1. **recordCount 747 / chronologicalFrontier 2013-07-08 / 07-08群CLOSED** から開始。
2. **2013-07-09～07-15**をK-Navi / ALL7 / HAZUSE / パチビー / メーカー別一覧 / 当時業界記事で境界監査。
3. より古い未登録がなければ **2013-07-16「ぱちスロAKB48」（京楽産業.）**を748件目候補として性能コア + resetBehavior v0.7収集。
4. 07-16同日群はAKB48だけと決め打ちせず全メーカー横断監査し、同日未登録があれば時系列内で追加。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。既存性能コアを無駄に再調査しない。

## 主要出典 — 取得日 2026-09-06

### ドラゴンギャル～修羅の野望～

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0201/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/45/h-1.php`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/7099`
- グリーンべると（P-WORLD転載）2013-05-17: `https://news.p-world.co.jp/articles/5855/greenbelt`
- vsmedia: `https://vsmedia.info/2013/07/11/dragongal/`
- スロ速VIP 2013年試打レポート転載: `https://slosoku.com/archives/28079508.html`
- 2-9伝説 天井狙い目一覧: `https://2-9densetsu.com/blog-entry-311-html/`
- 天井一覧: `https://smaslo.man-soft.com/slot-tenzyou-itiran/`
- ドラゴンギャルシリーズ回顧: `https://www.marimo0925.net/pachisuro-rekidai-ranking-2/`

### 次候補

- 京楽/グリーンべると当時告知転載: `https://p-mans.blogspot.com/2013/06/`
- グリーンべると 2013-07-25（7/16全国導入済みと明記）: `https://web-greenbelt.jp/00000998/`
- 後年機種DB: `https://pachinavi.net/machines/akb48-1/`
