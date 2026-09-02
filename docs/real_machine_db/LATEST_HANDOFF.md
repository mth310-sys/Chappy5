# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは366件地点 `パチスロ アタックNo.1`。
- **今回 367「スーパーアロハ」（パイオニア）を追加。既存367件の再追加禁止。**

## 367. スーパーアロハ

record:
- `docs/real_machine_db/machines/2009-05-11_super-aloha.md`

要点:
- manufacturer: パイオニア
- releaseDate: **2009-05-11**。グリーンべるとが2009-04-03記事で「納品は5月11日からスタートの予定」と明記。パイオニア公式は2009年5月発売で整合。
- 25φ機。Pマンズ（Playgraph転載）の2009-04-07記事が明記。
- generation: 5号機
- systemType: **ノーマル / Aタイプ / 完全告知 / 25φ**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/297 / 1/284 / 1/273 / 1/262 / 1/252 / 1/242**
- REG: **1/546 / 1/504 / 1/468 / 1/436 / 1/409 / 1/385**
- 合算: **1/192.4 / 1/181.6 / 1/172.4 / 1/163.7 / 1/155.9 / 1/148.6**
- 機械割: **96 / 98 / 100 / 103 / 106 / 110%**。パチマガはメーカー発表値として掲載し、P-WORLD/pacnkとも一致。
- BIG約312枚、REG約130枚。REG中にスイカ1回獲得で+12枚、パチマガではMAX142枚獲得。
- ティキティキチャレンジ搭載。ボーナス告知後の次ゲームでMAX BETを叩きティキティキランプ点灯ならBIG確定。当時Playgraph系ではBIG時約1/2で点灯と説明。
- 50枚ベースは表記/検索語/資料系統を変えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。パチマガ当時ページ自体が「1000円あたりのゲーム数 現在調査中」と記載。小役から逆算しない。
- formalModelName / inspectionNumber も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `NO_SPECIAL_BEHAVIOR_CONFIRMED_AFTER_RESEARCH`。設定変更時専用の天井・モード・状態恩恵を示す直接資料なし。
- carryOverBehavior: `NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING`。通常ゲーム数天井・ゲーム数管理・RT/ART状態を持つ構造は確認できない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時のリール初期位置、告知ランプ、初期出目など本機固有挙動は直接確定できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_OR_GAME_COUNT_MANAGEMENT_CONFIRMED`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`。
- modeAfterReset/stateAfterReset: 本DB物差し範囲で該当する通常時モード/内部状態システムは確認できず `NOT_APPLICABLE`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits/resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/ランプ等を機種名・パイオニア・25φ・設定変更/リセット/朝一/据え置き/電源で多段検索したが直接根拠を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 通常天井/短縮天井/リセットモード振分は `NOT_APPLICABLE`、朝一当選率/恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- パイオニア公式 / パチスロ機種情報2001年~2009年 — OFFICIAL
  - https://www.slot-pioneer.co.jp/products/2009.html
- グリーンべると / ボタン叩いてフラグ判別『スーパーアロハ』発表 — INDUSTRY
  - https://web-greenbelt.jp/00003100/
- Pマンズ（Playgraph転載） / パイオニアが「スーパーアロハ」の内覧会 — OLD_INDUSTRY
  - https://p-mans.blogspot.com/2009/04/
- P-WORLD / スーパーアロハ — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5523
- パチマガスロマガ / スーパーアロハ ボーナス確率・PAYOUT — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/90/h.php
- パチマガスロマガ / スーパーアロハ 小役確率 — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/90/c.php
- pacnk / スーパーアロハ 設定判別ツール — RETROSPECTIVE_ANALYSIS
  - https://pacnk.com/slot/tools/sh_spaloha.html

commit:
- 367 スーパーアロハ: `f870d6194608b1b9c7f0678ec9b4ce9c62f10c19`

## 2009年5月境界監査

- 2009-05-07群は `もっと楽シーサー25Φ / 30Φ全国 / 30Φ沖縄 / タイムリミット` まで収録済み。
- 2009-05-10 `パチスロ アタックNo.1` まで収録済み。
- **2009-05-11 `スーパーアロハ` を今回追加。**
- `スーパーアロハ-30` は後年回顧資料に名称併記例がある一方、当時Playgraph系は今回機を25φ機と明記し、パイオニア公式2009年製品一覧で独立した-30機を確認できない。新しい直接資料が出るまで独立レコード化しない。
- `スターマンアイズ` は当時グリーンべるとで2009年3月下旬納品予定、pacnkも2009年3月導入のため、5月候補ではなく**既存時系列の遡及漏れ候補**。次回まず既存登録有無をmainで確認し、未登録なら時系列漏れとしてQA遡及追加を検討する。
- `スロットニュートラッド` は2009-05-15時点で岡崎産業の発売記念イベント記事あり。具体納品/導入日を引き続き監査する。
- `レキオ2-30` は山佐公式で稼働時期2009年5月確認済み。具体日未確定。
- `デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` なども具体導入日順に監査する。
- `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、推測で5月1日へ遡及挿入しない。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準367件地点。既存367件の再追加禁止。**
2. **最初に `スターマンアイズ` の既存登録有無をmainで確認する。2009年3月下旬機なので未登録なら5月本線を進める前に遡及漏れとして処理する。**
3. 既登録なら2009-05-11以降の具体日監査へ戻り、`スロットニュートラッド` を最優先候補として納品/導入日を確定する。
4. 続いて `レキオ2-30 / デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等を具体導入日順に処理する。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## 直近コミット

- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`
- 364 もっと楽シーサー30Φ沖縄バージョン: `6e39c042e4c0333b7d3a0b883e0c3111eb5b9b10`
- 365 タイムリミット: `aca238055e53007a3d374226ec052b6705b4d21a`
- 366 パチスロ アタックNo.1: `a12a7bf300f3e1cca386a530a5e2f708c12a1c78`
- 367 スーパーアロハ: `f870d6194608b1b9c7f0678ec9b4ce9c62f10c19`
