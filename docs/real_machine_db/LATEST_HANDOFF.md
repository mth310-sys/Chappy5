# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **935**
- latestRecordAdded: **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～**（EXCITE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_hana-no-keiji-sengoku-kabukimono-no-utage.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.934 `2015-11-02_premium-bingo.md`、遡及QA対象 `2005-12_nobunaga-no-yabou-tenka-sousei-r.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **934** / 2015-11-02群OPEN。
- 指定された次未処理 **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～** をNo.935として追加。

## No.935 — 戦国パチスロ 花の慶次～戦極めし傾奇者の宴～
- record: `docs/real_machine_db/machines/2015-11-02_hana-no-keiji-sengoku-kabukimono-no-utage.md`
- manufacturer: **EXCITE**
- releaseDate: **2015-11-02**
- formalModelName: **花の慶次～戦極めし傾奇者の宴～EP**
- inspectionNumber: **5S0419**
- generation/system: **5号機 A+ART / ボーナス+初期G数変動型ART**

### performanceCore
- 機械割: **96.8 / 99.2 / 102.9 / 105.8 / 109.8 / 112.7%**。
- ART初当たり: **1/549.5 / 547.1 / 509.7 / 479.8 / 446.3 / 412.7**。
- ボーナス合成: **1/350.5 / 343.1 / 336.1 / 329.3 / 322.8 / 316.6**。
- 50枚ベース: **約31.8G**。
- ART純増: **約1.6枚/G**。
- 極BIG/BIG: **純増204枚**、REG: **純増54枚**。
- 通常最大天井: **ボーナス間999G**、到達でART当選（継続率優遇）。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モードRESELECT / 内部状態RESELECT**。
- 据え置き/純電源OFF→ON: **天井・内部モード・内部状態CARRYOVER**。
- 設定変更時モード振り分け:
  - 設定1～3: 通常A25.0% / 通常B50.0% / 天国22.5% / 戦極2.5%
  - 設定4～6: 通常A16.7% / 通常B50.0% / 天国30.8% / 戦極2.5%
- 設定変更時状態振り分け:
  - 設定1～3: 低確36.7% / 通常33.3% / 高確A27.5% / 高確B2.5%
  - 設定4～6: 低確26.7% / 通常33.3% / 高確A37.5% / 高確B2.5%
- リセット専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン/即時変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-11-02群 — CLOSED_FOR_CURRENT_RESEARCH
K-Navi 2015年11月新台カレンダーの全国一斉導入開始日一覧と実レコードを照合。

処理済み:
1. パチスロ龍が如く OF THE END — No.928
2. ぱちスロAKB48 バラの儀式 — No.929
3. パチスロ ガールズ＆パンツァー — No.930
4. ハイスクールD×D — No.931
5. 銀河機攻隊 マジェスティックプリンス — No.932
6. パチスロ IS〈インフィニット・ストラトス〉 — No.933
7. プレミアムビンゴ — No.934
8. 戦国パチスロ 花の慶次～戦極めし傾奇者の宴～ — No.935

監査結果:
- K-Naviの11/02全国一斉導入パチスロ8機と上記8レコードが一致。
- 11/03～11/08に同カレンダー上の全国一斉導入パチスロなし。
- 次の強アンカーは **2015-11-09 パチスロヤッターマン（三洋物産）**。
- 地域先行/後発や別日資料を発見した場合は将来QAで再OPEN可能。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaNextInspection: **2005-12_haisai-shiohime.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 今回QA — 信長の野望・天下創世R
- 既存 `qaResetBehavior: PARTIAL` / `resetBehaviorQA: PARTIAL` を再監査。
- 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を機種名・IGT名・表記揺れと組み合わせ、当時解析・古DB・実機/シミュレータ資料まで再探索。
- 本機固有の設定変更時内部状態、純電断との違い、ガックン等の確定判別資料は追加発見できず。
- 通常時ゲーム数天井も確認できないため `gameCounterReset: NOT_APPLICABLE_TO_NORMAL_CEILING`、短縮天井/朝一恩恵 `NONE_CONFIRMED` を維持。
- 既存性能コア/CONFLICTは変更しない。
- QA結果: **PARTIAL / UNVERIFIED_AFTER_RESEARCH 維持**。推測補完なし。

## 次回再開地点
1. **recordCount 935 / chronologicalFrontier 2015-11-02 / 11/02群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.935を再取得。
3. 11/03～11/08境界を再確認後、本線は **2015-11-09 パチスロヤッターマン（三洋物産）** を性能コア + resetBehavior v0.7で登録。
4. 11/09群の同日候補をメーカー/業界/当時カレンダーで横断監査する。
5. 遡及QAは `2005-12_haisai-shiohime.md` から継続。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 既存COMPLETE_CORE/PARTIALの性能判定をreset QAだけを理由に不用意に崩さない。

## 主要出典 — 取得日 2026-09-08
### No.935 花の慶次～戦極めし傾奇者の宴～
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/5S0419/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/5S0419/genre/209/
- K-Navi EXCITE発表: https://p-kn.com/topics/news/1867/
- グリーンべると: https://web-greenbelt.jp/00008056/
- パチビー: https://www.pachibee.jp/movies/index/12180
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/01/a.php
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/11573/
- 後年機械割照合: https://www.marimo0925.net/pachislot-kikaiwariranking-hanakei-ban/

### 2015-11-02群監査
- K-Navi新台導入カレンダー 2015年11月: https://p-kn.com/calendar/201511/

### retro QA 信長の野望・天下創世R
- 5号機クロニクル IGT: https://5goki.com/igt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/41/a.php
- Play-Asia PS2実機シミュレータ: https://www.play-asia.com/pachislot-nobunaga-no-yabou-tenka-souyo/13/70166r
- A-SLOT実機資料: https://www.a-slot.com/SHOP/igt3.html

## confidence
- No.935 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.935 identity/formalModel/inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- No.935 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.935 resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.935 purePowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.935 resetModeDistribution: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.935 resetStateDistribution: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.935 resetDetection: UNVERIFIED_AFTER_RESEARCH
- 2015-11-02 group closure: ANALYSIS_HIGH_PERIOD_CALENDAR_CROSSCHECK
- Nobunaga resetBehavior QA: PARTIAL_UNVERIFIED_AFTER_RESEARCH
