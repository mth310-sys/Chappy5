# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **779**
- latestMachineAddedByChronology: **パチスロ スタードライバー**（山佐）
- latestRecord: `docs/real_machine_db/machines/2013-11-18_star-driver.md`
- chronologicalFrontier: **2013-11-18**
- frontierLatestExactDateMachine: **パチスロ スタードライバー**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-11-18_GROUP_FOR_CURRENT_RESEARCH__BOUNDARY_2013-11-19_TO_2013-12-01_CLOSED_FOR_CURRENT_RESEARCH__NEXT_2013-12-02_GROUP**

## 今回の同期 / 重要事項

- 最新mainの README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード `2013-11-18_magical-halloween-4.md` を再読。
- INDEXは旧集約状態（19件）のため README 規定どおり **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は recordCount 778 / 2013-11-18群OPEN / マジカルハロウィン4済み / 次スタードライバー。
- GitHub検索で既存レコード不在を確認し、**パチスロ スタードライバー** を779件目として追加。
- 11/18同日群を再監査。既知のギルティギア / テイルズ オブ デスティニー / タイガーマスク / マジカルハロウィン4 / スタードライバーは処理済み。ALL7上の同日ベルコ「スーパーエイト」「デジラッシュ」は別資料でCRパチンコ機と確認し、本DB対象外。
- 2013-11-19〜12-01境界をALL7月間一覧・K-Navi/HAZUSE導入日検索・当時業界記事で再監査。今回の調査範囲では具体日を固定できる未登録パチスロを検出せず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い導入日アンカーは **2013-12-02**。

## 今回追加 — パチスロ スタードライバー

### 性能コア

- manufacturer: **山佐**。
- releaseDate: **2013-11-18**。パチビー / K-Navi / HAZUSE / ALL7で一致。山佐公式は2013年11月稼働。
- type: **5号機 / A+ART / 技術介入 / 天井**。
- 型式: **パチスロスタードライバーGG** / 検定番号 **3S0386**。
- 通常掲載機械割: **97.5 / 99.0 / 102.0 / 104.0 / 107.0 / 110.0%**。
- HAZUSE技術介入レンジ: **97.5〜99.0 / 99.0〜100.4 / 102.0〜103.5 / 104.0〜105.3 / 107.0〜108.5 / 110.0〜111.8%**。通常掲載系列と平均せず条件別に保持。
- ボーナス合成: **1/297.9 / 292.6 / 282.5 / 277.7 / 268.6 / 260.1**。
- ART初当たり: **1/385.6 / 364.2 / 338.8 / 314.8 / 294.9 / 277.8**。
- ボーナス+ART合算: **1/168.1 / 162.2 / 154.0 / 147.5 / 140.6 / 134.3**。
- baseGamesPer50: **約31G/1000円**。当時スペック資料の単一直接値のため `ANALYSIS_SINGLE_PERIOD_SOURCE`。
- ART「ZERO DRIVE」: **1セット50G+α / 純増約1.8枚/G**。
- SAMEKH BIG / BIG: **約205枚**、REG: **約55枚**。
- 通常時ART抽選状態: **通常 / 高確 / 超高確**。
- 第一天井 **ボーナス間1200G → ART**、第二天井 **ボーナス間1800G → ザメク決戦 + エンディングART**。ART当選ではボーナス間天井Gはリセットされない。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- setting change: 当時解析で **天井までのゲーム数リセット**を直接確認。
- carry-over: 据え置き時のボーナス間G/内部状態KEEP契約を本機固有に直接固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更リセットの逆を推定しない。
- power OFF→ON only: 電源/電断/再起動まで検索軸を変えたが、G数・状態の保持/初期化を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: setting change **CLEAR_CONFIRMED_ANALYSIS_PERIOD_SOURCE** / carry-over・power-cycleはUNVERIFIED。
- ceilingAfterReset: 0Gから再スタート。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。1200/1800Gは通常仕様。
- modeAfterReset: ゲーム数解除モード型ではない。設定変更専用朝一モード/テーブルは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 通常/高確/超高確は存在。設定変更・据え置き・純電断時の初期/保持振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: 設定変更専用短縮天井、ART確定、朝一高確率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で前日のボーナス間天井進捗が消える。
- resetDetection: ガックン/初期出目/液晶/ランプ等の本機固有変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。カフェ/星空は通常時の高確示唆であり変更判別へ転用しない。
- publicMorningNumbers: 設定変更時天井G **0から再スタート**。通常第一天井1200G / 第二天井1800G。リセット専用短縮・高確振り分けは未確認。

## safeguards

- 技術介入により機械割が変動するため、通常掲載値と技術介入上限を平均しない。
- 1200G/1800G天井はいずれも **ボーナス間**。ART当選ではリセットされない。
- 設定変更時天井Gクリアから、据え置き/純電断時KEEPを推定しない。
- 高確示唆ステージを朝一設定変更判別と混同しない。

## 2013-11-18群 / 次境界監査

- 処理済み: パチスロ ギルティギア / パチスロ テイルズ オブ デスティニー / パチスロ タイガーマスク / マジカルハロウィン4 / パチスロ スタードライバー。
- ALL7同日掲載のベルコ **CRスーパーエイト / CRデジラッシュ** はパチンコ機と公式・パチンコDBで確認し除外。
- 11/19〜12/01: 現時点の横断調査では具体日付き未登録パチスロなし。
- 2013-12-02確認済み候補: **うる星やつら3（銀座） / スゴスロ（ネット） / パチスロ湘南純愛組！（ニューギン） / パチスロ獣王 王者の帰還（Sammy）**。ALL7の12月一覧1ページ目には前3機、K-Navi/HAZUSEで獣王も12/02を直接確認。

## 遡及resetBehavior QA 進捗

- QAカーソルは引き続き `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は本線追加を優先しQAカーソルは進めていない。

## 次回再開地点

1. **recordCount 779 / chronologicalFrontier 2013-11-18 / 11-18群CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 2013-11-19〜12-01境界の最終短時間再確認後、**2013-12-02群OPEN**へ移動。
3. 次の未処理候補は **「うる星やつら3」（銀座）**。既存レコード不在確認後、性能コア + resetBehavior v0.7で780件目候補として処理。
4. その後 **スゴスロ → パチスロ湘南純愛組！ → パチスロ獣王 王者の帰還** を既知候補として同日全メーカー監査し、漏れがなければ12/02群CLOSED。
5. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_std/`
- ALL7 2013年11月: `https://www.all7.jp/plans/index/2013/11`
- ALL7 2013年12月: `https://www.all7.jp/plans/index/2013/12`
- パチビー スタードライバー: `https://www.pachibee.jp/machines/about/213100007`
- K-Navi スタードライバー: `https://p-kn.com/slot/1951/`
- パチマガスロマガ スタードライバー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/195/a.php`
- HAZUSE スタードライバー: `https://hazuse.com/machine/pachislot/3S0386/`
- HAZUSE基本スペック: `https://hazuse.com/machine/pachislot/3S0386/genre/201/`
- アタリ7: `https://www.atari7.com/slot/date1428987492.php`
- ★スロスター★当時スペック: `https://ameblo.jp/slostar/entry-11621255228.html`
- すろぱちくえすと 2013-11-18: `https://www.slopachi-quest.com/article/380506551-html/`
- ベルコ公式 CRスーパーエイト: `https://www.s-bellco.co.jp/products/pachinko/supereight/`
- パチマガスロマガ CRデジラッシュ: `https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/belco_pachi/005/p_dai.php`
- K-Navi うる星やつら3: `https://p-kn.com/slot/1961/`
- HAZUSE 湘南純愛組!: `https://hazuse.com/machine/pachislot/3S0527/`
- HAZUSE 獣王 王者の帰還: `https://hazuse.com/machine/pachislot/3S0773/`
- P-WORLD/グリーンべると スゴスロ: `https://news.p-world.co.jp/articles/6232/greenbelt`
