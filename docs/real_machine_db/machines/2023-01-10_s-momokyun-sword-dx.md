# SモモキュンソードDX

recordNo: 1544
machineName: SモモキュンソードDX
manufacturer: DAXEL製造 / 西陣販売
formalModel: SモモキュンソードDX
inspectionCode: 230223
releaseDate: 2023-01-10
generation: 6.5号機 / メダル機
systemType: AT / 周期CZ・擬似ボーナス経由 / ゲーム数上乗せAT

## payoutRateBySetting
- 設定1: 97.9%
- 設定2: 99.3%
- 設定4: 102.5%
- 設定5: 105.2%
- 設定6: 110.0%
- 設定L: 搭載表記あり / 出玉率公開値は今回固定せず

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス+AT合算初当たり
- 設定1: 1/198.9
- 設定2: 1/194.0
- 設定4: 1/186.9
- 設定5: 1/182.1
- 設定6: 1/180.4

### AT初当たり
- 設定1: 1/381.2
- 設定2: 1/342.9
- 設定4: 1/290.5
- 設定5: 1/251.8
- 設定6: 1/228.4

### 通常時 桃剣BONUS
- 設定1: 1/267.7
- 設定2: 1/259.0
- 設定4: 1/246.6
- 設定5: 1/237.9
- 設定6: 1/234.4

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH（合算・AT） / ANALYSIS_HIGH（通常時BONUS）

## baseGamesPer50
- 約35.5G/50枚。
- 約36G/50枚と丸める資料もあるため、canonicalは詳細値35.5Gを採用。

信頼度: ANALYSIS_HIGH

## netIncrease
- 桃剣RUSH: 約5.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- 桃剣BONUS: CZ経由はベルナビ5回、AT中はベルナビ10回。最終1Gで「真剣勝負」。
- 桃剣RUSH: ゲーム数上乗せ型AT。AT初当たり時は「桃剣ATTACK」から開始し、平均初期上乗せ約50G。
- AT突入時平均獲得枚数: 約470枚（1geki公開値）。
- 暴走BURST: 平均獲得期待枚数1200枚over。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は1周期32G+αで周期到達時にCZへ突入。
- 周期天井は最大20周期（通常時約760G消化）でAT「桃剣RUSH」確定。
- 周期中は「桃のカケラ」→「憑依チャレンジ」→「憑依玉」の獲得がCZ成功期待度に影響。
- CZ「鬼決戦」は勝利数に応じて桃剣BONUS / AT / 上位報酬へ発展する自力型。
- 西陣の業界発表ではホール導入を2023-01-09から予定としていたが、HAZUSE・必勝本・すろぱちくえすと等の実導入整理は2023-01-10で一致するため、本DB releaseDateは2023-01-10をcanonicalとする。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_BENEFIT_NUMERIC_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間・天井までの周期数・周期進行・内部モードをRESET。
- 必勝本では内部「状態」は再抽選、ステージも再抽選と明記。
- 周期数表示は「1」、周期ゲーム数表示は「32」に戻る。

### carryOverBehavior
- 据え置き時は有利区間・天井までの周期数・周期進行・内部モードをCARRY_OVER。
- 必勝本では状態・周期数表示・ゲーム数表示・ステージも引き継ぐ。

### powerCycleBehavior
- 純電源OFF→ONでは、すろぱちくえすとが有利区間・天井・内部モードを「引き継ぐ」と明記。
- 必勝本は天井までの周期数・状態・周期数表示・ゲーム数表示・ステージを引き継ぐと明記。
- よって純電源OFF→ONは据え置き契約としてCARRY_OVER。

### gameCounterReset
- 設定変更: RESET。周期数表示「1」、周期G数表示「32」。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常最大天井は20周期（約760G）。

### ceilingAfterReset
- 設定変更で既存の天井周期進行はRESET。
- 設定変更専用の天井短縮は、機種名・型式・DAXEL/西陣・リセット/朝一/天井短縮/周期短縮を組み替え、当時解析・後年整理を横断したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット後も公開上は通常契約の最大20周期（約760G）として扱う。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用モード振り分けの公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 再抽選（必勝本）。
- 据え置き: 引き継ぐ。
- 純電源OFF→ON: 引き継ぐ。
- 状態の設定変更専用振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- なな徹では有利区間ランプによる設定変更/据え置き判別は不可と明記。

### resetBenefits
- 設定変更専用の天井短縮・高モード固定・朝一CZ/AT優遇などは、資料系統を変えて再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 従って朝一客AI向けに固定できる数値恩恵は現時点でなし。

### resetPenalties
- 設定変更で前日の周期/天井進行、内部モード、内部状態を失う。
- 前日が深い周期・有利状態だった場合は据え置き期待を失うことが実質的不利。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時は周期数表示「1」・周期G数表示「32」に戻る一方、電源OFF→ON/据え置きは表示を引き継ぐ解析があるため、前日閉店時表示を把握できれば主要判別材料になる。
- 有利区間ランプでの判別は不可。
- 本機固有のリールガックン条件/発生率は `SモモキュンソードDX / Sモモキュンソード / DAXEL / 西陣 / 230223` と `ガックン / リール / 設定変更 / リセット判別 / 朝一` を組み替え、当時解析・旧DB・後年回顧まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時の周期数表示: 1。
- 設定変更時の周期G数表示: 32。
- 通常の最大周期天井: 20周期（約760G）。
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更専用天井短縮率/朝一当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 周期数表示「1」、周期G数表示「32」（設定変更時）。
- 最大周期天井20周期（約760G）は通常契約であり、リセット専用短縮値ではない。
- リセット専用のモード振り分け・特定G/周期以内当選率・恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `SモモキュンソードDX / Sモモキュンソード / モモキュンソードDX / DAXEL / 西陣 / 230223` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 周期 / モード / 状態 / 有利区間 / ガックン / 変更判別` を組み替えて検索。
- すろぱちくえすと、なな徹、パチ＆スロ必勝本、HAZUSE、業界発表、検定通過記事、Pachinaviを横断。
- 設定変更専用恩恵は複数の後年更新済み解析でも「調査中」または数値非掲載のため、推測せず未公開扱いとした。

## conflicts
- 導入日: 遊技通信の発表時点では「2023-01-09から予定」。複数の実導入DB/解析は2023-01-10で一致。canonicalは実導入整理の2023-01-10、1/9はPLANNED_DATE_DIFFERENCEとして保持。
- メーカー表記: 公安委員会系検定資料ではDAXEL株式会社、販売/機種DBでは西陣表記。業界発表が「DAXEL製」と明記するため、manufacturerは `DAXEL製造 / 西陣販売` として役割分離。
- 検定番号は公安委員会系業界資料・HAZUSE表示で `230223`。HAZUSE URL slugは `2S0223` だが、URL識別子を検定番号へ自動転記しない。
- ベースは約35.5G/50枚と約36G/50枚の表記差あり。詳細値35.5Gをcanonical、36Gは丸めと扱う。

## sources
取得日: 2026-09-13

- 遊技通信 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/22197/yugitsushin
  - 西陣発表、DAXEL製、1周期32G、純増5.0枚/G、桃剣ATTACK平均50G、暴走BURST1200枚over、2023-01-09導入予定。
- PiDEA 東京都公安委員会検定通過: https://www.pidea.jp/articles/1668388131
  - DAXEL株式会社、型式 `SモモキュンソードDX`、検定番号 `230223`。
- 遊技通信 東京都公安委員会2022年11月まとめ: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B411%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%8811/
  - DAXEL名義、型式、検定番号230223を再照合。
- HAZUSE: https://hazuse.com/machine/pachislot/2S0223/
  - 6.5号機AT、2023-01-10、設定別機械割・初当たり、純増、20周期天井、通常時BONUS確率。
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/2S0223/genre/203/
  - 桃剣BONUSベルナビ5/10回、桃剣RUSH、桃剣ATTACK平均50G、暴走BURST性能。
- すろぱちくえすと 天井/リセット: https://www.slopachi-quest.com/article/momokyunsord-tenjou/
  - 2023-01-10、約35.5G/50枚、20周期天井、設定変更時と電源OFF→ONの有利区間/天井/内部モード契約。
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4024/1/92086
  - 設定変更/電源OFF→ONの天井周期、状態、周期表示、G数表示、ステージのRESET/CARRY_OVER。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2514/2
  - 2023-01-10、純増約5枚/G、約35.5G/50枚。
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/487/13098/
  - 設定変更/据え置きの有利区間・天井・周期・モード、有利区間ランプ判別不可。
- なな徹 通常時: https://nana-press.com/kaiseki/machine/487/13100/
  - 1周期32G+α、20周期約760GでAT確定。
- Pachinavi: https://pachinavi.net/machines/momokyun-sword-dx/
  - 設定別初当たり/AT/機械割、DAXEL製造と西陣表記の整理。
- 1geki 桃剣RUSH: https://1geki.jp/slot/s_momokyun/83/
  - AT純増約5.0枚/G、AT突入時平均獲得約470枚。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_BENEFIT_NUMERIC_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
confidence: INDUSTRY formalModel/manufacturer/inspection / HIGH core / HIGH reset carry-over contract / reset-exclusive benefits UNVERIFIED_AFTER_RESEARCH