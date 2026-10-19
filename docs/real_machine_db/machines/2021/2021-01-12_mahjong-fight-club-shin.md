# 麻雀格闘倶楽部 真

No: 1385
machineName: 麻雀格闘倶楽部 真
machineNameVariants: パチスロ 麻雀格闘倶楽部 真 / 麻雀格闘倶楽部真 / S麻雀格闘倶楽部真
manufacturer: コナミアミューズメント
releaseDate: 2021-01-12
formalModelName: S麻雀格闘倶楽部真KS
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: AT / 差枚数管理型疑似ボーナス+上位AT

## identity / release
- コナミアミューズメント公式PVは2021年1月稼働開始を告知。K-Navi、パチビー、1geki、パチ＆スロ必勝本系で2021-01-12導入を一致確認。
- 型式 `S麻雀格闘倶楽部真KS` は中古実機系資料、設定キー資料、検定情報整理資料で一致。
- 検定番号は機種名・型式・メーカー・2020年検定情報を組み替えて再探索したが、今回高信頼な直接資料で固定できず推測しない。
- reliability: OFFICIAL / ANALYSIS_HIGH / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.9% |
| 3 | 100.3% |
| 4 | 104.1% |
| 5 | 106.2% |
| 6 | 108.5% |
- パチビー、K-Navi、1geki、必勝本系で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | 初当たり |
|---:|---:|
| 1 | 1/329.3 |
| 2 | 1/319.5 |
| 3 | 1/310.3 |
| 4 | 1/290.0 |
| 5 | 1/268.7 |
| 6 | 1/245.5 |
- 公開上の主要初当たり。複数資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約49.8G/50枚。
- K-Navi、必勝本系、複数攻略資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- 格闘倶楽部BONUS: 約5.0枚/G。
- AT「真格闘倶楽部RUSH」: 約3.0枚/G。
- 引き戻し区間込みの実戦期待値計算では実質純増を約2.0〜2.6枚/Gと置く資料もあるが、物差し値では各AT本体の公称純増と分離。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## basicPayout
- 格闘倶楽部BONUS: 差枚数管理。通常時/四神闘技場でアガった点数の1/100が獲得枚数となり、最大480枚+α。
- 四神闘技場: ボーナス後の引き戻し高確率状態。4戦制覇で「真格闘倶楽部RUSH」へ。
- 真格闘倶楽部RUSH: 差枚数管理型AT。突入時は「黄龍乱舞」で初期枚数決定。期待獲得枚数は約1400枚とする解析あり。
- 麒麟降臨: 格闘倶楽部BONUS×4ストック相当から真格闘倶楽部RUSHへ繋がる上位トリガー。期待獲得約2000枚の公表・解析あり。

## modeSpecificMinimumData
- 通常時は周期対局型。
- 天井: 有利区間開始後777Gを超えた対局で勝利濃厚となり、格闘倶楽部BONUS当選。資料により「777G」「777G+α」「777G以降の周期到達」と表現差があるため、実質発動が次対局になる点を保持する。
- 大龍壺: 敗北時にツモ運相当のポイントを蓄積し、300ptで役満チャンス or 試練の扉。
- 初期大龍壺ポイント振り分けには設定差が公開されているが、設定変更専用値ではないため通常の性能補助値として扱い、朝一専用数値へは混ぜない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_DETAILS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態は再抽選。
- 有利区間はRESETされ、通常時の有利区間ランプは消灯状態から開始する契約として複数攻略資料が一致。
- 設定変更専用の固定モード振り分け表・初期状態確率付きテーブルは今回の再探索では確認できず、通常時公開テーブルからの推測転記は行わない。

### carryOverBehavior
- 据え置きでは天井ゲーム数をCARRY_OVER。
- 内部状態もCARRY_OVER。
- 有利区間状態は設定変更を行わない限り引き継ぐ扱い。
- 筐体ゲーム数が前日値を引き継ぐ挙動を利用した変更推測が紹介されている。

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 有利区間ランプ状態CARRY_OVER。
- 設定変更と電源OFF→ONを分離した資料で一致。

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 朝一の筐体ゲーム数が0Gか前日値かを補助的な据え置き判別材料にする資料あり。ただしホール設備側のカウンタ仕様・対策で変わり得るため確定判別にはしない。

### ceilingAfterReset
- 設定変更専用の短縮天井は確認できず、通常天井と同じ有利区間開始後777G超の次対局が基準。
- 「777G」「777G+α」「777G以降の周期到達」は定義差として保持し、平均化しない。

### modeAfterReset
- 設定変更後に内部状態再抽選とする資料はあるが、本機で設定変更専用の明示的なモード振り分け表は確認できず `NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH`。
- 通常時のイベントモード/直当たりモードや大龍壺ポイント初期値の一般抽選を、設定変更専用抽選とは扱わない。

### stateAfterReset
- 設定変更: 再抽選。
- 据え置き/純電断: 引き継ぎ。
- 設定変更時の内部状態確率付き初期表は `NO_PUBLIC_FIXED_RESET_STATE_TABLE_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常時は有利区間ランプが消灯しているタイプのため、朝一ランプ消灯だけでは変更判別不可。

### resetBenefits
- 設定変更専用の天井短縮・専用高確率モード・朝一固定CZなど、定量的に確認できる明確な恩恵は今回の再探索で確認できず `NO_CONFIRMED_RESET_SPECIFIC_BENEFIT_AFTER_RESEARCH`。
- 一般の有利区間開始時挙動・通常抽選を設定変更専用恩恵として誤記しない。

### resetPenalties
- 設定変更専用の定量的不利要素は公開確認なし。

### resetDetection
- 通常時の有利区間ランプは消灯タイプ。朝一消灯単独では設定変更/据え置きを判別できない。
- 筐体ゲーム数が前日値をそのまま引き継ぐケースでは据え置き推測材料になる。前日0Gヤメや店側対策等があるため確定条件ではない。
- 本機固有のガックン発生条件/発生率は `麻雀格闘倶楽部 真 / S麻雀格闘倶楽部真KS / KONAMI` と `ガックン / 設定変更 / リセット / 据え置き / 朝一` を組み替え、攻略・旧DB・回顧資料まで再探索したが高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更専用のモード振り分け、朝一特定G以内当選率、短縮天井、専用CZ当選率などの確率付き公開値は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 一般の大龍壺初期ポイント振り分け（例: 設定1 30pt 57.8% / 50pt 39.1% / 150pt 3.1%）は公開されているが、設定変更専用値ではないため朝一数値としては採用しない。

## resetBehavior 再探索メモ
2026-09-11。`麻雀格闘倶楽部 真 / 麻雀格闘倶楽部真 / S麻雀格闘倶楽部真KS / コナミアミューズメント` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 大龍壺 / 有利区間 / ランプ / ガックン` を組み替え、コナミ公式、K-Navi、パチビー、1geki、パチ＆スロ必勝本系、期待値見える化、イチカツ、P-WORLD、なな徹、検定情報整理資料、中古実機型式資料を横断。性能コア、RESET/CARRY、内部状態、有利区間ランプの判別限界は複数系統で固定。設定変更専用の数値テーブル、ガックン、検定番号は高信頼な直接資料を固定できず推測補完しない。

## conflicts
- 天井表記は「777G」「777G+α」「777G以降の周期到達」。実際の恩恵発動が777G到達即時ではなく、その後の対局/周期到達であることを示す定義差であり、数値を平均しない。
- 純増は格闘倶楽部BONUS約5枚/G、真格闘倶楽部RUSH約3枚/G。引き戻し区間込みの期待値計算上の実質純増2.0〜2.6枚/Gとは定義を分離。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け: NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH
- 設定変更時内部状態の確率付き初期振り分け: NO_PUBLIC_FIXED_RESET_STATE_TABLE_FOUND_AFTER_RESEARCH
- 設定変更専用の確率付き朝一数値: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://www.youtube.com/watch?v=-4wEzGovZEs — コナミアミューズメント公式PV、2021年1月稼働開始 / OFFICIAL
- https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20210115.html — コナミ公式内で稼働開始確認 / OFFICIAL
- https://www.pachibee.jp/machines/index/220110002 — 導入日、機械割、初当たり、純増、基本性能、天井 / DATABASE_HIGH
- https://p-kn.com/slot/3510/ — 導入日、設定別初当たり/機械割、49.8G/50枚 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_mfc_shin/ — 導入日、設定別スペック、基本ゲーム性 / ANALYSIS_HIGH
- https://hisshobon.news/uncategorized/3220/ — 導入日、49.8G/50枚、初当たり/機械割、疑似ボーナス純増 / ANALYSIS_HIGH
- https://www.p-world.co.jp/machine/database/9281 — AT基本性能、格闘倶楽部BONUS最大480枚+α、真格闘倶楽部RUSH約3枚/G、天井 / DATABASE_HIGH
- https://ichikatsu.com/mfcshin/ — 天井、設定変更RESET/電源OFF→ON引継ぎ / ANALYSIS_SINGLE
- https://slotjin.com/tenjoukitaichi/mfc-shin/ — 天井、有利区間、内部状態、電断/据え置き、朝一判別 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/100/2553/ — 大龍壺初期ポイント一般振り分け / ANALYSIS_HIGH
- https://slothankey.com/設定キー/s麻雀格闘倶楽部真ks-設定キー-初期設定/ — 型式名 `S麻雀格闘倶楽部真KS` / DATABASE_SINGLE
- https://tanigyannburu.fc2.net/blog-entry-1119.html — 2020年検定情報整理、型式存在確認 / ARCHIVE_SECONDARY
