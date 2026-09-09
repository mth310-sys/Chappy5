更新日: 2026-09-09

## 現在地点
- recordCount: **1123**
- latestRecordAdded: **神の左手 悪魔の右目**（ハイライツ・エンタテインメント）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_kami-no-hidarite-akuma-no-migime.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **神の左手 悪魔の右目 — No.1123**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_CLOSED_RETROACTIVE_GAP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1122「ぱちスロ 仮面ライダーBLACK」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1122件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN**。
- HANDOFF最優先の次機種 **「神の左手 悪魔の右目」** をNo.1123としてperformance core + resetBehavior v0.7で登録。
- 鹿児島県公報で型式 **神の左手悪魔の右目／HC**、製造者 **ハイライツ・エンタテインメント株式会社**、検定番号 **7S0201** を直接確認。
- resetBehaviorは通常999G天井→設定変更時500G短縮、据え置き/純電源OFF→ON時の天井CARRYOVER、設定変更時5段階内部状態振り分けまで保存。
- 8/21群は複数の年別導入カレンダーで **イノキロードトゥゴッド / ロボットガールズZ / 戦国乙女TYPE-A / 花の慶次～天を穿つ戦槍～ / 仮面ライダーBLACK / 神の左手悪魔の右目** の6機が一致し、No.1118〜1123ですべて登録済みのため群自体はCLOSED。
- ただし境界監査で **イミソーレ3V-30（エマ）** の未登録を発見。HAZUSEは **2017-08-07**、2-9伝説カレンダーは **2017-08-17**、当時実戦/話題記事は8月15日前後の導入開始を示し、導入日CONFLICT。8/28へ進む前に遡及回収する。

## No.1123 — 神の左手 悪魔の右目
- manufacturer canonical: **ハイライツ・エンタテインメント**
- releaseDate canonical: **2017-08-21**
- formalModelName: **神の左手悪魔の右目／HC**
- certificationNumber: **7S0201**
- generation/system: **5号機 / A+ART / CZ / リアルボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.9 / 99.4 / 101.9 / 103.7 / 106.1 / 109.1%**。
- ART/RUSH初当たり: **1/250.9 / 243.4 / 229.4 / 210.1 / 193.4 / 173.3**。
- リアルボーナス: **全設定1/862.8**。
- ベース: **約38.9G/50枚**。
- ART純増: **約1.9枚/G**。
- 神RUSH: **40G/セット**。悪RUSH: **25G以上**。
- リアルボーナス獲得枚数: **約150枚 vs 175枚 CONFLICT**。
- 通常天井: **ボーナス・ART間999GでART**。

### resetBehavior v0.7
- settingChange: **天井RESET_AND_SHORTEN_TO_500G**、内部状態を5段階で設定別再抽選。
- stay-setting: **G数天井CARRYOVER**。その他内部状態の独立契約はUNVERIFIED_AFTER_RESEARCH。
- pure power OFF→ON: **G数天井CARRYOVER**。内部状態/ステージはUNVERIFIED_AFTER_RESEARCH。
- 設定変更時状態:
  - 設1: A65.2 / B12.5 / C12.5 / 高確9.4 / 超高確0.4%
  - 設2: A59.4 / B12.5 / C12.5 / 高確12.5 / 超高確3.1%
  - 設3: A53.1 / B12.5 / C12.5 / 高確15.6 / 超高確6.3%
  - 設4: A46.9 / B12.5 / C12.5 / 高確15.6 / 超高確12.5%
  - 設5: A40.6 / B12.5 / C12.5 / 高確15.6 / 超高確18.8%
  - 設6: A28.1 / B15.6 / C15.6 / 高確15.6 / 超高確25.0%
- 高確以上開始率（上記原表の単純合算）: **9.8 / 15.6 / 21.9 / 28.1 / 34.4 / 40.6%**。
- ガックンは後年整理資料で「不可？」だが疑問符付きのため **POSSIBLE_NO_GAKKUN_NONDETERMINISTIC**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / unresolved
- manufacturer label: 公報・当時発売発表 **ハイライツ・エンタテインメント** vs P-WORLD **アイゲート**。canonicalは公的資料側。
- real bonus payout: パチビー/P-WORLD **約150枚** vs すろぱちくえすと **175枚**。
- CZ ART期待度: 業界記事 **33%** vs P-WORLD **約35%**。主要物差し値には使用しない。
- setting-change start stage: **UNVERIFIED_AFTER_RESEARCH**。
- stay-setting/pure-power-cycle internal state: **UNVERIFIED_AFTER_RESEARCH**。

## 2017-08-21群監査 — CLOSED
- No.1118 イノキロードトゥゴッド
- No.1119 パチスロ ロボットガールズZ
- No.1120 戦国乙女～TYPE-A～
- No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～
- No.1122 ぱちスロ 仮面ライダーBLACK
- No.1123 神の左手 悪魔の右目
- 複数導入日カレンダーで上記6機が一致。8/21群自体はCLOSED。

## 境界監査で発見した遡及漏れ
### イミソーレ3V-30 / イミソーレXX30（エマ）
- **未登録。次回最優先No.1124候補。**
- HAZUSE: 導入開始 **2017-08-07**、型式 **イミソーレ3V-30**、検定番号 **7S0676**。
- 2-9伝説カレンダー: **2017-08-17**導入。
- 当時記事: **8月15日頃から導入開始**、8月19日時点で極少数設置との記録。
- releaseDateは **CONFLICT_2017-08-07_VS_2017-08-17_WITH_MID_AUGUST_OBSERVATION** として精査する。
- P-WORLDはメーカー **エマ**、BIG約286枚 / REG約104枚、BIG後100Gの「はながさタイム」を掲載。
- HAZUSEは設定別BIG/REG確率を掲載。次回は機械割、50枚ベース、はながさタイムの定義、設定変更/据え置き/純電断、朝一判別を十分再探索して登録する。

## 2017-08-28次群 — 先行監査
- 複数カレンダーで **討鬼伝 / 戦国美少女 織田信奈の野望** の2機を確認。
- イミソーレ遡及漏れ回収後、8/28群へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1123と境界漏れ監査を優先したため遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1123を再取得。
2. **1123件 / chronologicalFrontier 2017-08-21 / 8/21群CLOSED + RETROACTIVE_GAP_OPEN** を正本として継続。
3. **最優先: 未登録「イミソーレ3V-30（イミソーレXX30）」をNo.1124候補として遡及回収**。導入日競合を解消/CONFLICT保持し、performance core + resetBehavior v0.7を収集。
4. イミソーレ登録後、**2017-08-28群「討鬼伝」「戦国美少女 織田信奈の野望」**へ進む。
5. 8/28群も全メーカー横断監査後にCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1123 神の左手 悪魔の右目
- 鹿児島県公報 平成29年6月13日 第3322号: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1706/documents/59758_20170612150613-1.pdf
- グリーンべると 発表記事: https://web-greenbelt.jp/00009703/
- パチ7 / プレイグラフ 発売発表・型式名: https://pachiseven.jp/news/index/page%3A64
- パチビー: https://www.pachibee.jp/machines/lecture/217070004
- K-Navi: https://p-kn.com/slot/2841/
- P-WORLD: https://www.p-world.co.jp/machine/database/8445
- ちょんぼりすた: https://chonborista.com/slot/high-enter/41803/
- すろぱちくえすと: https://www.slopachi-quest.com/article/the-god-or-devil/
- 期待値見える化: https://slotjin.com/zone/kamiaku/
- 朝一リセット狙い整理: https://sin-surobi.com/tatimawari/20388/

### 8/21群・境界監査
- モゲスロ 2017年導入カレンダー: https://moge-site.com/new-slot2017
- すろぱちくえすと 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 2-9伝説 新台カレンダー: https://29den.com/newslot/
- HAZUSE イミソーレXX30: https://hazuse.com/machine/pachislot/7S0676/
- P-WORLD イミソーレ3V-30: https://www.p-world.co.jp/machine/database/8490
- P-Summa イミソーレ導入時期回顧: https://psumma.jp/pachislo/36486/
