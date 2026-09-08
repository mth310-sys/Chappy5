更新日: 2026-09-08

## 現在地点
- recordCount: **1020**
- latestRecordAdded: **マハラJA / ナイトオブマハラジャ ～神秘なる秘宝～**（デンケン販売、遡及漏れ補完）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-03_mahara-ja-night-of-maharaja.md`
- chronologicalFrontier: **2016-10-24**
- frontierLatestMachine: **クランキーセレブレーション — No.1019**
- schema: **resetBehavior v0.7**
- status: **2016-10-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-10-03_RETRO_GAP_FILLED / NEXT_BOUNDARY_2016-10-25_TO_2016-10-31**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1018実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 最新main実レコードを進捗正本として使用。既存性能コアはやり直していない。
- main正本 **1018件 / chronologicalFrontier 2016-10-17 / 10/17群CLOSED** から継続。
- 2016-10-18〜10-23境界を導入日一覧・メーカー/業界・型式名で再監査し、新たな全国導入本線を固定できず10/24へ前進。
- 10/24候補 **クランキーセレブレーション**をGitHub内重複確認後、No.1019として追加。
- 10月境界の月横断監査中、既存DB未登録の **マハラJA / ナイトオブマハラジャ** を発見。全国導入予定本線2016-10-03だが2016-09の一部先行導入実績が確認できるため、No.1020として遡及補完。frontier自体は10/24から戻さない。
- 10/24同日群について現時点で追加の全国導入機を固定できず **2016-10-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。ただし一般的な導入日一覧がマハラJAのような小規模機を落とすことがあるため、次回も10/25〜10/31境界をメーカー/業界/古いDBまで横断してから11月へ進む。

## No.1019 — クランキーセレブレーション
- manufacturer: **アクロス / ACROSS**
- releaseDate: **2016-10-24**
- formalModelName: **クランキーセレブレーションRE**
- certificationNumber: **6S0410**
- generation/system: **5号機 / 5.5号機期 / ノーマルA / 技術介入機**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割 通常: **98.5 / 101.2 / 105.9 / 111.6%**（設定1/2/5/6）。
- 完全攻略: **101.1 / 104.0 / 109.0 / 115.0%**。
- BIG: **1/196.80 / 187.25 / 172.92 / 156.78**。
- REG: **1/431.16 / 409.60 / 387.79 / 344.92**。
- 合算: **1/135.1 / 128.5 / 119.6 / 107.8**。
- ベース: **約34〜35G/50枚**。別資料の34.0〜35.4G/50枚は設定差レンジとして定義分離。
- BIG MAX250枚 / REG MAX103枚。技術介入なし整理値238枚 / 91枚も別定義で保持。

### resetBehavior v0.7
- 天井・ゲーム数管理・AT/ART/CZ・朝一専用天井モードは非搭載/非該当。
- 設定変更専用の短縮天井、朝一高確、専用CZ等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の設定変更/純電断時の成立済みボーナス等特殊局面は **UNVERIFIED_AFTER_RESEARCH**。一般的なAタイプ挙動から推測しない。
- ガックン/初期出目等で設定変更と純電断を確定識別できる本機固有公開契約は、クラセレ/型式RE/アクロスを含む再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1020 — マハラJA / ナイトオブマハラジャ ～神秘なる秘宝～（遡及漏れ）
- manufacturer: **デンケン販売**
- releaseDate canonical: **2016-10-03（全国導入予定本線）**
- earlyInstallation: **2016-09一部先行導入確認**
- formalModelName: **マハラ JA**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+RT / 1500G完走型RT**
- recordStatus: **COMPLETE_PUBLIC_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_AFTER_RESEARCH**

### performanceCore
- 公開確認設定は1/6のみ。当時資料が設定1/6のみ公表と明記するため、設定2〜5は単なる検索不足ではなく `NOT_PUBLICLY_DISCLOSED_IN_FOUND_CONTEMPORARY_SOURCES`。
- 機械割 canonical: **設定1 97.5% / 設定6 107.3%**。
- ボーナス合算 canonical: **設定1 1/141 / 設定6 1/97**。
- P-WORLD/業界レンジの設定6側 **1/97.5・107.5%** は平均せずそれぞれ `CONFLICT_SETTING6_BONUS_COMBINED_1_97_VS_1_97_5` / `CONFLICT_SETTING6_PAYOUT_107_3_VS_107_5` として保持。
- ベース: **約35G/50枚**。
- BIG約220枚 / 大ステルス約100枚 / 小ステルス約40枚。
- 小ステルスの一部から **1500G完走型RT「ナマステモード」**。ボーナスを挟んでも1500G消化までRT継続。
- 数値純増/Gは直接固定できず `UNVERIFIED_AFTER_RESEARCH`。P-WORLDはコイン現状維持型と説明。

### resetBehavior v0.7
- 設定変更/据え置き/純電源OFF→ONそれぞれで、1500G RT残ゲーム数・内部RT状態がRESET/CARRYOVERのどちらかを示す本機固有直接資料は、表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源/RT/ナマステモード/ガックンを組み替えて再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井は解析ガイドが「調査中」で、非搭載と断定できないため `UNVERIFIED_AFTER_RESEARCH`。設定変更専用短縮天井/朝一モード数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/表示による変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 全国導入予定10/03と9月先行設置は `NATIONAL_ROLLOUT_PLANNED_2016_10_03` / `EARLY_INSTALLATION_2016_09_CONFIRMED` の流通段階差として分離し、日付を平均・消去しない。

## 2016-10-24群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **クランキーセレブレーション**（アクロス）— No.1019

現時点で10/24同日追加機を固定できずCLOSED。ただし小規模メーカー機の漏れを防ぐため、次境界も月間一覧だけに依存しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1019 / No.1020を再取得。
2. **1020件 / chronologicalFrontier 2016-10-24 / 10/24群CLOSED** を正本として継続。
3. **2016-10-25〜10-31境界監査**を導入日一覧だけでなくメーカー/業界記事/型式/古いDBまで横断。未登録全国導入機があれば先に追加。
4. 境界が空なら2016-11月へ前進。一般的一覧では11/07に **パチスロ ウィッチマスター / パチスロ薄桜鬼蒼焔録** が見えるが、マハラJAのような小規模機漏れがあるため、11/01〜11/06も先に監査する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、別系統資料を十分に再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1019 クランキーセレブレーション
- HAZUSE: https://hazuse.com/machine/pachislot/6S0410/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S0410/genre/201/
- K-Navi: https://p-kn.com/slot/2627/
- グリーンべると: https://web-greenbelt.jp/00008988/
- ピロ式: https://piro-shiki.com/cranky-celebration-kaiseki/
- ちょんぼりすた: https://chonborista.com/slot/acros-slot/26802/comment-page-7/
- けんスロ: https://kenslo65536.com/kaiseki/cranky-celebration.html
- 一撃: https://1geki.jp/slot/s_crankycelebration/61/
- 一撃 告知モード: https://1geki.jp/slot/s_crankycelebration/43/

### No.1020 マハラJA / ナイトオブマハラジャ
- グリーンべると: https://web-greenbelt.jp/00008868/
- P-WORLD: https://www.p-world.co.jp/machine/database/8149
- ちょんぼりすた: https://chonborista.com/slot/denken/24365/
- P-Summa: https://psumma.jp/pachislo/26345/
- パチスロ解析ガイド: https://pachislot-guide.net/2016/night-of-maharaja/
- パチ7実戦: https://pachiseven.jp/columns/column_detail/7625
- いたちゃんの痛パチ・痛スロ日記: https://ameblo.jp/itasan666/entry-12199875140.html
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2016/10/night-of-maharaja
- ぱちんこドキュメント!!: https://pachinkolist.com/archives/49240553.html
