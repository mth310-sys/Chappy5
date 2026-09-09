更新日: 2026-09-09

## 現在地点
- recordCount: **1113**
- latestRecordAdded: **パチスロ バイオハザード リベレーションズ**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-31_biohazard-revelations.md`
- chronologicalFrontier: **2017-07-31**
- frontierLatestMachine: **パチスロ バイオハザード リベレーションズ — No.1113**
- schema: **resetBehavior v0.7**
- status: **2017-07-31_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1112「トラッドサンダーブラック」、遡及対象「ちゅら姫SUN」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1112件 / chronologicalFrontier 2017-07-18 / 7/18群CLOSED**。
- handoff指定の次未処理 **「パチスロ バイオハザード リベレーションズ」** をNo.1113として登録。
- performance core + resetBehavior v0.7を同時収集。
- exact release dateは2017-07-24 vs 2017-07-31を再監査。複数の当時解析/機種DBが7/31で一致し、モゲスロのみ7/24のため、7/31をchronological canonical、7/24を `CONFLICT_SECONDARY_RELEASE_DATE` として保持。
- 遡及reset QAは `2006-06_churahime-sun.md` を再探索し、性能側 `status: PARTIAL` を維持したままreset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## No.1113 — パチスロ バイオハザード リベレーションズ
- manufacturer: **エンターライズ**
- releaseDate canonical: **2017-07-31**
- secondary exact-date source: **2017-07-24 — CONFLICT_SECONDARY_RELEASE_DATE**
- formalModelName: **バイオハザードリベレーションズ／ZW**
- certificationNumber: **7S0275**
- generation/system: **5号機 / A+ART / ST-ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 標準機械割: **97.9 / 98.8 / 101.3 / 103.9 / 106.6 / 108.1%**。
- 完全攻略系上限値: **99.0 / 99.9 / 102.6 / 105.3 / 108.1 / 109.8%**。算出条件差として別保持し平均しない。
- BONUS: **1/119.6 / 1/118.7 / 1/117.9 / 1/116.2 / 1/115.0 / 1/113.4**。
- ART初当たり: **1/520.0 / 1/502.5 / 1/449.1 / 1/406.3 / 1/365.8 / 1/347.9**。
- ベース: **約34G/50枚**。
- BONUS「リベレーションズチャンス」: **約60枚 / 10G**。
- ST-ART「RAID MODE」: **1セット50G+α / ボーナス込み約2.0枚/G**。
- 第1天井: **400G 5.0% / 500G 10.0% / 600G 12.5% / 700G 25.0% / 800G 47.5%**。選択G数以降のボーナスでART。
- 第2天井: **ボーナスorART間最大810GでART**。
- 通常スルー天井: ART非当選ボーナス14連続後、**15回目でART**。

### resetBehavior v0.7
- settingChange:
  - ゲーム数天井 **RESET**。
  - スルー回数天井 **6回目ボーナスでART**へ短縮。
  - 内部状態 **再抽選**。
  - 液晶 **船員居住区**開始。
- powerCycle:
  - ゲーム数天井 **CARRYOVER**。
  - スルー回数天井 **CARRYOVER**。
  - 内部状態 **CARRYOVER**。
  - 液晶は船員居住区。ボーナス/ART中の電断は当該状態引継ぎ資料あり。
  - 低レベルRT状態契約は当時資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- resetModeDistribution: **通常1 34.38% / 通常2 50.00% / 通常3 15.63%**。
- resetStateDistribution:
  - 戦慄S **12.50%**、戦慄D **12.50%**（全設定共通）。
  - 戦慄R: 設定1/3/5 **3.13%**、設定2/4 **6.25%**、設定6 **12.50%**。
- ART後の短縮スルー天井状態: **40.2%（精密40.23%）継続 / 59.8%（59.77%）転落**。
- resetDetection: 設定変更/純電断とも船員居住区開始のため開始ステージ単独判別不可。本機固有の確定ガックン確率は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 遡及 resetBehavior QA — ちゅら姫SUN
- path: `docs/real_machine_db/machines/2006-06_churahime-sun.md`
- performance status: **PARTIAL 維持**。性能完了判定は変更していない。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**。
- メーカー公式、当時パチマガスロマガ、旧機種DB、5号機回顧、業界資料を再探索。
- 公開仕様上、通常ゲーム数天井 / RT / AT / ART / CZ / 朝一ゲーム数モードは **NONE_CONFIRMED / NOT_APPLICABLE**。
- 設定変更/据え置き/純電断時の成立済みボーナス・告知・液晶等の低レベル内部状態は本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ランプ等の変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な5号機ノーマル機挙動からRESET/CARRYOVERを推測していない。

## 2017-07-24〜07-31境界監査
- バイオハザード リベレーションズ: 7/24資料が1系統ある一方、HAZUSE/一撃/すろぱちくえすと/ちょんぼりすた/K-Navi等は7/31で一致。No.1113に競合保存済み。
- グレートキングハナハナ-30の7/24表記はNo.1111で既処理済みのため重複しない。
- **燃えよ！功夫淑女ドラゴン**: モゲスロ/K-Navi/ちょんぼりすた等で **2017-07-31** 候補。次の未処理として優先。
- **政宗2**: 当時解析の一部は **2017-07-31**、HAZUSEおよび複数後年資料は **2017-08-07**。未処理時に `CONFLICT_2017_07_31_VS_2017_08_07` を再監査する。
- したがって7/31群はまだ **OPEN**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 次カーソルは初回レコード追加コミット順で、ちゅら姫SUNの直後がサンダーバードNEOXXであることをGitHub履歴から確認。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1113を再取得。
2. **1113件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN** を正本として継続。
3. 次の未処理 **「燃えよ！功夫淑女ドラゴン」** をNo.1114候補として性能コア + resetBehavior v0.7同時収集。
4. その後 **政宗2** の2017-07-31 vs 2017-08-07競合を再監査し、7/31群CLOSE可否を判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。既存PARTIAL性能を不用意に崩さず、特に設定1機械割91.0%の別ソースQAとRTリセット契約を優先再探索する。

## 主要出典 — 取得日 2026-09-09
### No.1113 バイオハザード リベレーションズ
- HAZUSE: https://hazuse.com/machine/pachislot/7S0275/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/7S0275/genre/207/
- 一撃: https://1geki.jp/slot/s_biohazard_revelations/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_biohazard_revelations/3/
- 一撃 ART: https://1geki.jp/slot/s_biohazard_revelations/81/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2989/1/65361
- すろぱちくえすと: https://www.slopachi-quest.com/article/biohazard-revelations/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/39201/
- P-WORLD: https://www.p-world.co.jp/machine/database/8419
- K-Navi: https://p-kn.com/slot/2815/
- ニッカンアミューズメント/娯楽産業: https://www.nikkansports.com/amusement/pachinko/news/1825966.html
- モゲスロ2017導入カレンダー: https://moge-site.com/new-slot2017

### ちゅら姫SUN QA
- ユニバーサル公式: https://www.universal-777.com/product/slot/churahime_sun/
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/a.php
- パチマガスロマガ設定推測: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/i.php
- 5号機クロニクル: https://5goki.com/universal
- なな徹設定段階: https://nana-press.com/post/1591139
- ALL7 2006年6月: https://www.all7.jp/plans/index/2006/06
- グリーンべると: https://web-greenbelt.jp/00004865/

### 次境界監査
- 燃えよ！功夫淑女ドラゴン/K-Navi: https://p-kn.com/slot/2828/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/40820/
- 政宗2 HAZUSE: https://hazuse.com/machine/pachislot/7S0209/
- 政宗2 すろぱちくえすと: https://www.slopachi-quest.com/article/masamune2/