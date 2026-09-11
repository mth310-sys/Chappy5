# 戦国乙女3～天剣を継ぐもの～

No: 1386
machineName: 戦国乙女3～天剣を継ぐもの～
machineNameVariants: パチスロ戦国乙女3～天剣を継ぐもの～ / 戦国乙女3 天剣を継ぐもの / S戦国乙女3天剣を継ぐものH3
manufacturer: オリンピア（平和系）
releaseDate: 2021-01-12
formalModelName: S戦国乙女3天剣を継ぐものH3
certificationNumber: 9S1639

generation: 6.1号機
systemType: AT / 差枚数管理型

## identity / release
- HAZUSEで型式 `S戦国乙女3天剣を継ぐものH3`、検定番号 `9S1639`、メーカー「オリンピア」、導入開始日2021-01-12を確認。
- 1geki、K-Navi、パチビー、イチカツでも2021-01-12導入を一致確認。攻略媒体ではブランドをHEIWA/平和表記するものもあるため、メーカー表記差はオリンピア（平和系）として保持する。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.0% |
| 3 | 100.1% |
| 4 | 104.7% |
| 5 | 108.5% |
| 6 | 112.5% |
- 1geki、イチカツ等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/758.9 |
| 2 | 1/648.3 |
| 3 | 1/551.6 |
| 4 | 1/419.8 |
| 5 | 1/322.5 |
| 6 | 1/282.0 |
- 1geki、イチカツ、複数攻略資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.5G/50枚。
- イチカツ、1geki小役資料、複数機種DBで照合。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「天剣乱舞」: 約8.5枚/G。
- 差枚数管理型AT。
- reliability: ANALYSIS_HIGH

## basicPayout
- AT「天剣乱舞」は差枚数管理型で、初回は上乗せ特化ゾーン「強カワ無双」から開始。
- 強カワ無双では差枚数上乗せ・乙女参戦ストック・必殺乙女レイドが絡む構成。
- AT終了後のエピソードバトル勝利で上位AT「剣聖乱舞」へ移行するルートあり。
- 実機完全再現用の細かな内部抽選値は物差しDB対象外のため省略。

## modeSpecificMinimumData
- 通常時は規定ゲーム数解除を管理する複数モードを搭載。
- 通常: 最大約999G。
- チャンス: 最大約699G。
- 特殊: 最大約399G。
- 天国: 最大約199G。
- 鬼神: 最大約999G。最深部のゲーム数当選時は鬼神繚乱ストック抽選あり。
- 有利区間移行後、通常時最大999G消化でAT「天剣乱舞」当選。
- 有利区間開始時の内部状態は低確がセットされるとHAZUSE解析に明記。
- 出陣ポイントは1000pt到達で出陣チャンスアイコン獲得。初回アイコンは赤66.8% / 金33.2%、2回目以降は白79.7% / 赤17.2% / 金3.1%。これは通常性能の公開値であり、設定変更専用数値とは分離する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_ZONE_BENEFIT
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 出陣ポイントは内部的に500ptから開始。
- 有利区間の新規開始となり、HAZUSE解析上は有利区間開始時の内部状態は低確セット。
- 設定変更専用のモード振り分け確率表は今回確認できず、通常モード表から推測転記しない。

### carryOverBehavior
- 据え置きでは有利区間をCARRY_OVER。
- 天井ゲーム数をCARRY_OVER。
- 出陣ポイントを内部的にCARRY_OVER。
- 内部モード/状態について、設定変更を行わない純据え置きは有利区間進行を継続するものとして扱う。ただしホール側の対策操作を含むケースは別。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 出陣ポイントCARRY_OVER。
- パチマガスロマガ、HAZUSE、イチカツの設定変更/電源ON・OFF比較表で一致。

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 液晶上の現在G数は天井判断に使われるが、店側対策・表示処理のみから設定変更を断定しない。

### ceilingAfterReset
- 設定変更後もモード別最大天井の公開契約は通常約999G / チャンス約699G / 特殊約399G / 天国約199G / 鬼神約999G。
- 「設定変更時だけ最大天井が固定短縮される」という解析値は確認できない。
- 実戦値ベースではリセット後300G・600G付近の当選率優遇が複数期待値系資料で報告されているが、メーカー解析の固定天井短縮とは区別する。

### modeAfterReset
- 設定変更により有利区間を新規開始する。
- 通常/チャンス/特殊/天国/鬼神のモード構造は公開済みだが、設定変更専用の確率付きモード振り分け表は `NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH`。
- リセット後300G・600G付近の優遇は実戦値由来であり、特定モードへの固定移行とは断定しない。

### stateAfterReset
- 有利区間開始時の内部状態は低確がセットされるとHAZUSEに明記。
- 据え置き/純電断では有利区間を引き継ぐため、進行中状態を継続する扱い。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常時は有利区間ランプ点灯型。設定変更後は消灯、電源ON・OFFのみでは点灯状態を引き継ぐという朝一比較資料あり。

### resetBenefits
- 設定変更後は出陣ポイントが内部500ptスタート。1000ptでアイコン獲得のため、通常0pt相当からの開始と比べ明確な公開朝一恩恵。
- 実戦値では300G・600Gゾーンの当選率が優遇される傾向が報告され、リセット狙いボーダーを浅くする根拠として扱われている。
- ただし300G/600G優遇の確率付き公式解析は確認できないため `EMPIRICAL_RESET_ZONE_BENEFIT_NO_FIXED_PUBLIC_RATE` とする。

### resetPenalties
- 設定変更専用の定量的不利要素は公開確認なし。
- 据え置きで高ポイント・有利なモード等を保持していた場合にそれを失う一般的なRESET効果はあるが、独立した「リセット不利抽選」とは扱わない。

### resetDetection
- 朝一有利区間ランプ消灯なら設定変更濃厚、点灯なら据え置き濃厚とする複数攻略資料あり。
- 前日が有利区間非点灯のまま閉店、または店側が回す等の対策時は判別不能であり確定条件ではない。
- 本機固有のガックン発生条件/発生率は高信頼な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一ステージは豊後国or美作国とする資料あり、設定変更/純電断の双方で同じため単独判別材料にはしない。

### numericResetData / publicMorningNumbers
- 設定変更時の出陣ポイント: **内部500ptスタート**。
- 出陣ポイント1000pt到達時の初回アイコン: 赤66.8% / 金33.2%。これは「初回アイコン」の一般抽選値であり、500ptスタートと組み合わさるが設定変更専用振り分けそのものではない。
- 実戦上のリセット後ゾーン優遇: 300G・600G付近。固定の公開当選率は確認できず `NO_FIXED_PUBLIC_RESET_ZONE_RATE_FOUND`。
- 設定変更専用モード振り分け率、朝一特定G以内AT当選率、ガックン率: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-12。`戦国乙女3 / 天剣を継ぐもの / S戦国乙女3天剣を継ぐものH3 / オリンピア / 平和` と `設定変更 / リセット / 据え置き / 電源OFF ON / 朝一 / 天井 / モード / 状態 / 出陣ポイント / 有利区間 / ランプ / ガックン / 300G / 600G` を組み替え、HAZUSE、パチマガスロマガ、1geki、なな徹、イチカツ、期待値見える化、K-Navi、パチビー等を横断。後年のHAZUSE・パチマガ系は設定変更/電源OFF・ON比較表を直接掲載し、天井・有利区間・出陣ptのRESET/CARRY契約が一致。1gekiの天井/設定変更ページは設定変更・電源OFF/ONを「現在調査中」としており、これは公開情報の欠損/更新差として保持し、直接契約を否定する反証とは扱わない。300G/600G優遇は実戦値由来のため解析確率とは分離した。

## conflicts
- メーカー表記は攻略媒体で「平和」、型式DBでは「オリンピア」。型式主体のmanufacturerをオリンピア（平和系）としブランド表記差として保持。
- 1gekiの設定変更ページは天井・状態・ステージを「現在調査中」とする一方、HAZUSE/パチマガスロマガ/イチカツは天井・有利区間・出陣ptの設定変更/電断比較を掲載。数値が相反する競合ではなく、資料の情報充足差として扱う。
- リセット後300G/600G優遇は実戦値系資料で確認されるが、固定確率の解析値は未確認。`EMPIRICAL`として保持し公式確率へ昇格しない。

## missingFields
- 本機固有ガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け率: NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH
- リセット後300G/600G優遇の固定公開当選率: NO_FIXED_PUBLIC_RESET_ZONE_RATE_FOUND

## sources
取得日: 2026-09-12
- https://hazuse.com/machine/pachislot/9S1639/ — 型式、検定番号、導入日、純増、天井、設定変更/電源ON・OFF、出陣pt、内部状態 / DATABASE_HIGH
- https://hazuse.com/machine/pachislot/9S1639/genre/207/ — 天井・設定変更比較 / DATABASE_HIGH
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/kr01.php — 朝イチ・有利区間ランプ、設定変更/電源OFF・ON比較 / ANALYSIS_HIGH
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/tj03.php — 出陣ポイント、設定変更時500pt、アイコン振り分け / ANALYSIS_HIGH
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/tj08.php — 通常モードと天井 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_otome3/ — 設定別AT初当たり、出玉率、導入日、ゲーム性 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_otome3/3/ — 天井、設定変更/電断「調査中」の履歴 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_otome3/80/ — AT天剣乱舞・純増約8.5枚/G / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/98/2688/ — モード別天井、有利区間継続時の挙動 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/98/2693/ — モード・ゾーン / ANALYSIS_HIGH
- https://ichikatsu.com/otome3tenken/ — スペック、ベース、リセット比較、実戦上の300G/600G優遇 / ANALYSIS_SECONDARY
- https://slotjin.com/tenjoukitaichi/sengokuotome3/ — 朝一リセット実戦値・期待値系補助 / ANALYSIS_SECONDARY
- https://p-kn.com/slot/3507/ — 2021-01-12導入・基本ゲーム性 / DATABASE_HIGH
- https://www.pachibee.jp/machines/lecture/220110003 — 2021-01-12導入・6.1号機AT / DATABASE_HIGH
